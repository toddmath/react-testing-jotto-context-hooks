/**
 * @method getLetterMatchCount
 * @param {string} guessedWord  - Guessed word.
 * @param {string} secretWord - Secret word.
 * @returns {number} - Number of letters matched between guessed word and secret word.
 */
export function getLetterMatchCount(guessedWord, secretWord) {
  const [guessedSet, secretSet] = [
    new Set(guessedWord.split("")),
    new Set(secretWord.split(""))
  ];

  return [...secretSet].filter(letter => guessedSet.has(letter)).length;
}
