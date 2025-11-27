function isPalindrome(x: number): boolean {
  return x.toString() === Array.from(x.toString()).reverse().join("");
}
