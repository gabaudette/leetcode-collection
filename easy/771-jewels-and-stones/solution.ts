function numJewelsInStones(jewels: string, stones: string): number {
  const stoneMap = new Map<string, number>();
  for (const stone of Array.from(stones)) {
    stoneMap.set(stone, 0);
  }

  const jewelsMap = new Map<string, number>();
  for (const jewel of Array.from(jewels)) {
    jewelsMap.set(jewel, 0);
  }

  let output = 0;
  for (const stone of stones) {
    if (stoneMap.has(stone) && jewelsMap.has(stone)) {
      output++;
    }
  }

  return output;
}
