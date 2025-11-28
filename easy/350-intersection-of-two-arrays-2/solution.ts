function intersect(nums1: number[], nums2: number[]): number[] {
  const map = new Map<number, number>();
  const output: number[] = [];

  for (const num1 of nums1) {
    const key = num1;
    const count = map.get(num1) ?? 0;
    const frequence = count + 1;
    map.set(key, frequence);
  }

  for (const num2 of nums2) {
    const key = num2;
    const count = map.get(num2) ?? 0;
    if (count > 0) {
      output.push(num2);
      const frequence = count - 1;
      map.set(key, frequence);
    }
  }

  return output;
}
