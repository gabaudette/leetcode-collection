function maximumWealth(accounts: number[][]): number {
  let output = 0;
  for (const account of accounts) {
    let temp = 0;
    for (const money of account) {
      temp += money;
    }

    if (temp > output) {
      output = temp;
    }
  }

  return output;
}
