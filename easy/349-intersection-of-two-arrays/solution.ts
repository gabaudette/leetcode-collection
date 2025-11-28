function intersection(nums1: number[], nums2: number[]): number[] {
  const setNums1 = new Set(nums1);
  const setNums2 = new Set(nums2);

  return [...setNums1].filter((x) => setNums2.has(x));
}

// This could have also been done using Set.prototype.intersection()
// // But this is not yet supported in LeetCode environment
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/intersection
