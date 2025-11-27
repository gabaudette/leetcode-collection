function detectCapitalUse(word: string): boolean {
  if (word.length === 1) {
    return true;
  }

  const alphabetArr: string[] = [];
  for (let i = 65; i <= 90; i++) {
    alphabetArr.push(String.fromCharCode(i));
  }

  const arr = Array.from(word).filter((char) => alphabetArr.includes(char));
  if (arr.length === 0) {
    return true;
  }

  if (arr.length === 1) {
    const index = word.indexOf(arr[0]);
    return index === 0;
  }

  if (arr.length === word.length) {
    return true;
  }

  return false;
}
