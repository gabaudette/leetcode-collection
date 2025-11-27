function letterCombinations(digits: string): string[] {
  if (digits.length === 0) {
    return [];
  }

  const map = new Map<number, string>();
  map.set(2, "abc");
  map.set(3, "def");
  map.set(4, "ghi");
  map.set(5, "jkl");
  map.set(6, "mno");
  map.set(7, "pqrs");
  map.set(8, "tuv");
  map.set(9, "wxyz");

  let letterCombinations = [""];

  for (let i = 0; i < digits.length; i++) {
    const digit = Number(digits[i]);
    if (!map.has(digit)) {
      return [];
    }

    const characters = map.get(digit)!.split("");
    const combinations: string[] = [];
    for (let letter of letterCombinations) {
      for (let char of characters) {
        combinations.push(`${letter}${char}`);
      }
    }

    letterCombinations = combinations;
  }

  return letterCombinations;
}
