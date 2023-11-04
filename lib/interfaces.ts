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

export interface ClusterModel {
  similarity: String;
  kanji: KanjiModel[];
}
