import mongoose from "mongoose";

const kanjiSchema = new mongoose.Schema({
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
});

const Kanji = mongoose.models.Kanji || mongoose.model("Kanji", kanjiSchema, "Kanji");

export default Kanji;