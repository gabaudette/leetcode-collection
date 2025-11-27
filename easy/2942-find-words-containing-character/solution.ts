function findWordsContaining(words: string[], x: string): number[] {
  const indexes: number[] = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.includes(x)) {
      indexes.push(i);
    }
  }

  return indexes;
}
