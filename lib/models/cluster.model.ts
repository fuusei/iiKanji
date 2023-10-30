import mongoose from "mongoose";
import Kanji from "./kanji.model";

const clusterSchema = new mongoose.Schema(
  {
    similarity: {
      type: String,
      unique: true,
      required: true,
    },
    kanji: [Kanji],
  },
  {
    timestamps: {
      createdAt: "created_at", // Use `created_at` to store the created date
      updatedAt: "updated_at", // and `updated_at` to store the last updated date
    },
    strict: true,
  }
);

const Cluster =
  mongoose.models.Cluster ||
  mongoose.model("Cluster", clusterSchema, "Cluster");

export default Cluster;
