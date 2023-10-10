export const findEndOfSentenceAfterXCharacters = (
  text: string,
  numberOfCharacters: number
) => numberOfCharacters + text.slice(numberOfCharacters, -1).indexOf(".") + 1;
