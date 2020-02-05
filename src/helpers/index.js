/* eslint-disable import/prefer-default-export */

const toSet = array => new Set(array.split(''))

/**
 * Helper function to count how many characters match between guessed and secret words
 * @param {string} guessedWord  - Guessed word.
 * @param {string} secretWord - Secret word.
 * @returns {number} - Number of letters matched between guessed word and secret word.
 */
export function getLetterMatchCount(guessedWord, secretWord) {
  if (!guessedWord || !secretWord) {
    throw Error(`guessedWord and secretWord cannot be undefined`)
  }

  const [guessedSet, secretSet] = [toSet(guessedWord), toSet(secretWord)]

  return [...secretSet].filter(char => guessedSet.has(char)).length
}
