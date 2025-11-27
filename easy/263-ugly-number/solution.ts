function isUgly(n: number): boolean {
  if (n <= 0) {
    return false;
  }

  if (n === 1) {
    return true;
  }

  const primeFactor = [2, 3, 5];
  for (const factor of primeFactor) {
    if (n % factor === 0) {
      return isUgly(n / factor);
    }
  }

  return false;
}
