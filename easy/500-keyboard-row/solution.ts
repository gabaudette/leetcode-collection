function findWords(words: string[]): string[] {
  const r1 = new Set("qwertyuiop");
  const r2 = new Set("asdfghjkl");
  const r3 = new Set("zxcvbnm");

  const output = [];
  for (const word of words) {
    const w = word.toLowerCase();
    const letters = Array.from(new Set(w));

    const row1Condition = letters.every((l) => r1.has(l));
    const row2Condition = letters.every((l) => r2.has(l));
    const row3Condition = letters.every((l) => r3.has(l));

    if (row1Condition || row2Condition || row3Condition) {
      output.push(word);
    }
  }

  return output;
}
