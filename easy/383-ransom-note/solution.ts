function canConstruct(ransomNote: string, magazine: string): boolean {
  return ransomNote.split("").every((letter) => {
    const mag = magazine.replace(letter, "");
    if (mag === magazine) {
      return false;
    }

    magazine = mag;

    return true;
  });
}
