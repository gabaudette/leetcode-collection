function isPowerOfTwo(n: number): boolean {
  if (n === 0) {
    return false;
  }

  if (n === 1) {
    return true;
  }

  const max = 1e-10;
  const a = Math.log(n) / Math.log(2);

  return Math.abs(a - Math.round(a)) < max;
}
