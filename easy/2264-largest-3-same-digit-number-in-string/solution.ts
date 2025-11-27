function largestGoodInteger(num: string): string {
  let output = "";
  for (let i = 0; i <= num.length - 3; i++) {
    if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
      const a = num.slice(i, i + 3);
      if (a > output) {
        output = a;
      }
    }
  }

  return output;
}
