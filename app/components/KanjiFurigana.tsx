interface Props {
  kanji: string;
  furigana: string;
}
export const KanjiFurigana: React.FC<Props> = ({ kanji, furigana }) => {
  return (
    <div className="flex flex-col">
      <div className="text-[0.65em]">{furigana}</div>
      <div className="text-[1.3em]">{kanji}</div>
    </div>
  );
};
