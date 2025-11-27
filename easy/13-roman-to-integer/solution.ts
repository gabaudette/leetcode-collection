function romanToInt(s: string): number {
  const map = new Map<string, number>([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  const keys = Array.from(map.keys());
  let total = 0;

  for (let i = s.length - 1; i >= 0; ) {
    const right = s[i];
    const left = s[i - 1];

    const valueRight = map.get(right) ?? 0;
    const valueLeft = left ? (map.get(left) ?? 0) : 0;

    if (left && checkSubstract(keys, left, right)) {
      total += valueRight - valueLeft;
      i -= 2;
    } else {
      total += valueRight;
      i -= 1;
    }
  }

  return total;
}

function checkSubstract(
  keys: string[],
  leftKey: string,
  rightKey: string,
): boolean {
  const leftIndex = keys.indexOf(leftKey);
  const rightIndex = keys.indexOf(rightKey);
  if (leftIndex === -1 || rightIndex === -1) {
    return false;
  }

  const distance = rightIndex - leftIndex;

  return distance > 0 && distance <= 2;
}
