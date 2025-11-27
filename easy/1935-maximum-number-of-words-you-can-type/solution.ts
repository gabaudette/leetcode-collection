function canBeTypedWords(text: string, brokenLetters: string): number {
  let words = text.split(" ");
  let brokenLetter = brokenLetters.split("");

  words = words.filter((word) => {
    return !brokenLetter.some((letter) => word.includes(letter));
  });

  return words.length;
}
