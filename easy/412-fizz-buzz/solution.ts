function fizzBuzz(n: number): string[] {
  const answer: string[] = [];
  for (let i = 1; i <= n; i++) {
    let arr: string[] = [];
    if (i % 3 === 0) {
      arr.push("Fizz");
    }

    if (i % 5 === 0) {
      arr.push("Buzz");
    }

    if (arr.length === 0) {
      arr.push(String(i));
    }

    answer.push(arr.join(""));
  }

  return answer;
}
