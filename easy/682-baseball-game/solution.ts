function calPoints(operations: string[]): number {
  const stack: number[] = [];
  for (let i = 0; i < operations.length; i++) {
    const ops = operations[i];
    if (ops === "+") {
      if (stack.length < 2) {
        continue;
      }

      const a = stack.pop();
      const b = stack.pop();
      if (a === undefined || b === undefined) {
        continue;
      }

      const sum: number = a + b;
      stack.push(b);
      stack.push(a);
      stack.push(sum);
    } else if (ops === "D") {
      const a = stack.pop();
      if (a === undefined) {
        continue;
      }

      stack.push(a);
      stack.push(a * 2);
    } else if (ops === "C" && stack.length > 0) {
      stack.pop();
    } else {
      stack.push(Number(ops));
    }
  }

  let sum = 0;
  while (stack.length > 0) {
    const a = stack.pop();
    if (a === undefined) {
      continue;
    }

    sum += a;
  }

  return sum;
}
