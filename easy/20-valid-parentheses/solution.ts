function isValid(s: string): boolean {
  const map: Record<string, string> = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const stack: string[] = [];
  for (const char of s) {
    if (map[char]) {
      stack.push(map[char]);
    } else {
      if (stack.pop() !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
