function isPowerOfFour(n: number): boolean {
  if (n === 0) {
    return false;
  }

  if (n === 1) {
    return true;
  }

  const a = Math.log(n) / Math.log(4);

  return a === Math.floor(a);
}
