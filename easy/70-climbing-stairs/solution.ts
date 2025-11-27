function climbStairs(n: number): number {
  if (n <= 1) {
    return 1;
  }

  let step = 1;
  let temp = 1;

  for (let i = 2; i <= n; i++) {
    const currentStep = step + temp;
    temp = step;
    step = currentStep;
  }

  return step;
}
