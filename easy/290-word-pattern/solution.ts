function wordPattern(pattern: string, s: string): boolean {
  const patterns = Array.from(pattern);
  const words = s.split(" ");

  const patternSet = new Set(patterns);
  const wordsSet = new Set(words);

  const keys = Array.from(patternSet);
  const values = Array.from(wordsSet);

  if (patternSet.size !== wordsSet.size || patterns.length != words.length) {
    return false;
  }

  const map = new Map<string, string>(keys.map((k, i) => [k, values[i]]));
  for (const [index, p] of patterns.entries()) {
    if (map.get(p) !== words[index]) {
      return false;
    }
  }

  return true;
}
