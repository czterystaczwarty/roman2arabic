export const allowedCharacters = new Map([
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["L", 50],
  ["C", 100],
  ["M", 1000],
]);

export function roman2arabic(romanNumber: string): number {
  return romanNumber.split("").reduceRight((latin, char, index, chars) => {
    const current = allowedCharacters.get(char);
    const prev = allowedCharacters.get(chars[index + 1]);
    if (!current) {
      throw new Error(`Unknown character: ${char}`);
    }
    if (prev && current < prev) {
      return latin - current;
    } else {
      return latin + current;
    }
  }, 0);
}
