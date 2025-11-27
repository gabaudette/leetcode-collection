function removeElement(nums: number[], val: number): number {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (val !== nums[i]) {
      nums[index] = nums[i];
      index++;
    }
  }

  return index;
}
