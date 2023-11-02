interface Props {
  kanji: string;
  furigana: string;
  meaning: string;
}
export const KanjiFurigana: React.FC<Props> = ({
  kanji,
  furigana,
  meaning,
}) => {
  return (
    <div className="flex flex-col">
      <div className="text-[0.85em]">{furigana}</div>
      <div className="flex flex-row justify-start">
        <div className="text-[1.3em]">{kanji}</div>
        <div className="pt-1 px-1"> = </div>
        <div className="font-gameboy pt-1 px-1">{meaning}</div>
      </div>
    </div>
  );
};
