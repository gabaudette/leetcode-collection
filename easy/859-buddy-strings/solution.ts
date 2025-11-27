function buddyStrings(s: string, goal: string): boolean {
  if (s.length !== goal.length) {
    return false;
  }

  if (s === goal) {
    const set = new Set();
    for (let i = 0; i < s.length; i++) {
      if (set.has(s[i])) {
        return true;
      }

      set.add(s[i]);
    }

    return false;
  }

  const indexes: number[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      indexes.push(i);
    }
  }

  const a = s[indexes[0]] === goal[indexes[1]];
  const b = s[indexes[1]] === goal[indexes[0]];
  const condition = a && b;

  return indexes.length === 2 && condition;
}
