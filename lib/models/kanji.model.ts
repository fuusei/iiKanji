import mongoose from "mongoose";

const kanjiSchema = new mongoose.Schema(
  {
    kanji: {
      type: String,
      unique: true,
      required: true,
    },
    onyomi: {
      type: String,
      required: false,
    },
    kunyomi: {
      type: String,
      required: false,
    },
    meaning: {
      type: String,
      required: true,
    },
    examples: [
      {
        word: { type: String, required: true },
        furigana: { type: String, required: true },
        meaning: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: {
      createdAt: "created_at", // Use `created_at` to store the created date
      updatedAt: "updated_at", // and `updated_at` to store the last updated date
    },
    strict: true,
  }
);

const Kanji =
  mongoose.models.Kanji || mongoose.model("Kanji", kanjiSchema, "Kanji");

export default Kanji;
