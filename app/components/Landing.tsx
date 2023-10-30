"use client"
import { FormEvent, useEffect } from "react";
import { createKanji } from "@/lib/actions/kanji.actions";

export function Landing() {

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const form_values = Object.fromEntries(formData);
    const { word, onyomi, kunyomi, meaning } = form_values;
    const kanjiObj = {
      kanji: word.toString(),
      onyomi: onyomi.toString(),
      kunyomi: kunyomi.toString(),
      meaning: meaning.toString(),
      examples: [
        { word: "水", furigana: "みず", meaning: "water" },
        { word: "水曜日", furigana: "すいようび", meaning: "Wednesday" },
      ],
    };
    await createKanji({
      kanji: kanjiObj.kanji,
      onyomi: kanjiObj.onyomi,
      kunyomi: kanjiObj.kunyomi,
      meaning: kanjiObj.meaning,
      examples: kanjiObj.examples,
    });
  }
  return (
    <div>
      <form onSubmit={onSubmit} className="flex flex-col">
        <input type="text" name="word" className="m-2 border-2 border-black" />
        <input
          type="text"
          name="onyomi"
          className="m-2 border-2 border-black"
        />
        <input
          type="text"
          name="kunyomi"
          className="m-2 border-2 border-black"
        />
        <input
          type="text"
          name="meaning"
          className="m-2 border-2 border-black"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
