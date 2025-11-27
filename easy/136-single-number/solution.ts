function singleNumber(nums: number[]): number {
  const numSet = new Set<number>();
  for (const num of nums) {
    if (numSet.has(num)) {
      numSet.delete(num);
    } else {
      numSet.add(num);
    }
  }

  return numSet.values().next().value;
}
