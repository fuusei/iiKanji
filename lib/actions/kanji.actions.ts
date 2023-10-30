"use server";
import Kanji from "../models/kanji.model";
import { connectToDB } from "../mongoose";

export async function fetchKanji() {
  try {
    connectToDB();
    return await Kanji.find(
      {},
      { _id: 0, created_at: 0, updated_at: 0, __v: 0,  "examples._id": 0, }
    );
  } catch (error: any) {
    throw new Error(`Failed to fetch kanji: ${error.message}`);
  }
}

export interface Example {
  word: string;
  furigana: string;
  meaning: string;
}

export interface KanjiModel {
  kanji: string;
  onyomi?: string;
  kunyomi?: string;
  meaning: string;
  examples: Example[];
}

export async function createKanji({
  kanji,
  onyomi,
  kunyomi,
  meaning,
  examples,
}: KanjiModel) {
  try {
    connectToDB();
    await Kanji.create({ kanji, onyomi, kunyomi, meaning, examples });
  } catch (error: any) {
    throw new Error(`Failed to create kanji: ${error.message}`);
  }
}
