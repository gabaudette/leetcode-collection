function removeDuplicates(nums: number[]): number {
  const unique = [...new Set(nums)];
  nums.length = 0;
  nums.push(...unique);

  return nums.length;
}
