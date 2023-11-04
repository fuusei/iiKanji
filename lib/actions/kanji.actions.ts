"use server";
import Kanji from "../models/kanji.model";
import { KanjiModel } from "../interfaces";
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
    if(error.code === 11000) {
      throw new Error("Kanji already exists.")
    }
    else {
      throw new Error(error);
    }
    
  }
}
