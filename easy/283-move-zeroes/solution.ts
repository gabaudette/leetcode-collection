function moveZeroes(nums: number[]): void {
  const zeroes = nums.filter((x) => x === 0);
  const noneZeroesArr = nums.filter((x) => x !== 0);

  nums.length = 0;
  nums.push(...noneZeroesArr.concat(zeroes));
}
