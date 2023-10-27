export const findEndOfSentenceAfterXCharacters = (
  text: string,
  numberOfCharacters: number
) => {
  const nextDot =
    numberOfCharacters + text.slice(numberOfCharacters, -1).indexOf(".") + 1;

  if (nextDot > numberOfCharacters + 50) {
    return numberOfCharacters;
  }

  return nextDot;
};
