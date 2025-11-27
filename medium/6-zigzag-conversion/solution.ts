function convert(s: string, numRows: number): string {
  if (numRows === 1 || numRows >= s.length) {
    return s;
  }

  const rows = new Array(numRows).fill("");
  let currentRow = 0;
  let step = 1;

  for (const char of s) {
    rows[currentRow] += char;
    if (currentRow === 0) {
      step = 1;
    } else if (currentRow === numRows - 1) {
      step = -1;
    }

    currentRow += step;
  }

  return rows.join("");
}
