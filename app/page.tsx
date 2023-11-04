import { Landing } from "./components/Landing";
import { KanjiModel } from "@/lib/interfaces";
import {
  createKanji,
  fetchKanji,
} from "@/lib/actions/kanji.actions";
import { Card } from "./components/Card";
import { AddButton } from "./components/AddButton";

export default async function Home() {
  const kanji: KanjiModel[] = await fetchKanji();

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-wrap justify-evenly">
        {kanji.map((char, i) => (
          <Card
            key={i}
            kanji={char.kanji}
            onyomi={char.onyomi}
            kunyomi={char.kunyomi}
            meaning={char.meaning}
            examples={char.examples}
          />
        ))}
      </div>
      <AddButton />
    </div>
  );
}
