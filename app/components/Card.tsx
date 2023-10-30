import { KanjiModel } from "@/lib/actions/kanji.actions";
import { KanjiFurigana } from "./KanjiFurigana";

export const Card: React.FC<KanjiModel> = ({
  kanji,
  onyomi,
  kunyomi,
  meaning,
  examples,
}) => {
  return (
    <div className="mx-4 my-8 rounded-xl h-[300px] w-[300px] bg-dolphin">
      <div className="flex flex-col items-center">
        <div className="font-kanji flex justify-center text-5xl p-2">
          {kanji}
        </div>
        <div className="font-gameboy text-plum p-2">{`Onyomi: ${onyomi}`}</div>
        <div className="font-gameboy text-granny-apple p-2">{`Kunyomi: ${kunyomi}`}</div>
        <div className="font-gameboy p-2">{`Meaning: ${meaning}`}</div>
        {examples.map((ex, i) => (
          <div className="flex flex-row items-center">
            <KanjiFurigana kanji={ex.word} furigana={ex.furigana}/>
            <div> = </div>
            <div className="font-gameboy">{`${ex.meaning}`}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
