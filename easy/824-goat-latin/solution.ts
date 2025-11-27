function toGoatLatin(sentence: string): string {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  const words = sentence.trim().split(" ");
  if (words.length === 0) {
    return "";
  }

  const output: string[] = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    const firstLetter = word[0];
    if (!vowels.includes(firstLetter)) {
      word += firstLetter;
      word = word.slice(1);
    }

    word += "ma";

    const fillLength = word.length + i + 1;
    word = word.padEnd(fillLength, "a");
    output.push(word);
  }

  return output.join(" ");
}
