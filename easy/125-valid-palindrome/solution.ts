function isPalindrome(str: string): boolean {
  const s = str.trim().toLowerCase();
  let filtered = "";
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
      filtered += char;
    }
  }

  if (filtered.length <= 1) {
    return true;
  }

  let left = 0;
  let right = filtered.length - 1;

  while (left < right) {
    if (filtered[left] !== filtered[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
