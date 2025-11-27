function threeConsecutiveOdds(arr: number[]): boolean {
  let x = 0;
  let prev = arr[0];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    prev = num;
    if (num % 2 == 1 && prev % 2 == 1) {
      x++;
    } else {
      x = 0;
    }

    if (x === 3) {
      return true;
    }
  }

  return false;
}
