function isHappy(n: number): boolean {
  if (n < 1) {
    return false;
  }

  const arr = String(n).split("").map(Number);

  if (arr.length === 1) {
    if (arr[0] === 1 || arr[0] === 7) {
      return true;
    }

    return false;
  }

  const tempArr = arr.map((a) => a ** 2);
  const sum = tempArr.reduce((acc, value) => acc + value);
  if (sum === 1) {
    return true;
  }

  return isHappy(sum);
}
