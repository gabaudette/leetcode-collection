function isAnagram(s: string, t: string): boolean {
  const a = Array.from(s).sort().join();
  const b = Array.from(t).sort().join();

  return a === b;
}
