function licenseKeyFormatting(s: string, k: number): string {
  const a = s.replaceAll("-", "");
  if (a.length === 0) {
    return "";
  }

  const reverseArr = Array.from(a).reverse();
  let output = "";

  for (let i = 0; i < reverseArr.length; i += k) {
    const slice = reverseArr.slice(i, i + k);
    output += slice.join("");

    if (i + k < reverseArr.length) {
      output += "-";
    }
  }

  const outputArr = Array.from(output);

  return outputArr.reverse().join("").toUpperCase();
}
