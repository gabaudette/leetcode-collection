function countSegments(s: string): number {
  if (s === "") {
    return 0;
  }

  const temp = s.trim().split(" ");
  const result = temp.filter((x) => x !== "");

  return result.length;
}
