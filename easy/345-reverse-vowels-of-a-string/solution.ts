function reverseVowels(s: string): string {
  const arr = Array.from(s);
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  const indexes: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];
    if (vowels.includes(char)) {
      indexes.push(i);
    }
  }

  let leftIndex = 0;
  let rightIndex = indexes.length - 1;
  while (leftIndex < rightIndex) {
    const temp = arr[indexes[leftIndex]];
    arr[indexes[leftIndex]] = arr[indexes[rightIndex]];
    arr[indexes[rightIndex]] = temp;
    leftIndex++;
    rightIndex = rightIndex - 1;
  }
  return arr.join("");
}
