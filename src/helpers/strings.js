const languageStrings = {
  en: {
    congrats: 'Congratulations! You guessed the word!',
    submit: 'Submit',
    guessPrompt: 'Try to guess the secret word!',
    guessInputPlaceholder: 'enter guess',
    guessColumnHeader: 'Guessed Words',
    guessedWords: 'Guesses',
    matchingLettersColumnHeader: 'Matching Letters',
  },
  emoji: {
    congrats: '🎯🎉',
    submit: '🚀',
    guessPrompt: '🤔🤫🔤',
    guessInputPlaceholder: '⌨️🤔',
    guessedWords: '🤷‍🔤',
    guessColumnHeader: '🤷‍',
    matchingLettersColumnHeader: '✅',
  },
}

const hasKey = (lang, key, dic) => dic[lang] && dic[lang][key]

/**
 * Helper function to get string for either english or emoji at provided key.
 * @param {string} language Which language to return.
 * @param {string} key Which language key to return.
 * @param {object} [dict=languageStrings] Optional paramater, for testing.
 * @returns {string} translated string
 */
function getStringByLanguage(language, key, dict = languageStrings) {
  if (!hasKey(language, key, dict)) {
    console.warn(`Could not get string [${key}] for [${language}]`)
    return dict.en[key]
  }

  return dict[language][key]
}

export default {
  getStringByLanguage,
}
