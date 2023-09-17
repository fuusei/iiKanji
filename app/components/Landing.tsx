"use client"
import { FormEvent } from "react";
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
      examples: [{ word: "水", furigana: "みず", meaning: "water" }],
    };
    await createKanji({
      kanji: kanjiObj.kanji,
      onyomi: kanjiObj.onyomi,
      kunyomi: kanjiObj.kunyomi,
      meaning: kanjiObj.meaning,
      examples: kanjiObj.examples
    });
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="word" />
      <input type="text" name="onyomi" />
      <input type="text" name="kunyomi" />
      <input type="text" name="meaning" />
      <button type="submit">Submit</button>
    </form>
  );
}
