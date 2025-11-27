function reverseWords(s: string): string {
  const words = s.split(" ").filter(Boolean);
  return words.reverse().join(" ");
}
