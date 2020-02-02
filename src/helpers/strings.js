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

const getStringByLanguage = (language, key, dict = languageStrings) => {
  if (!hasKey(language, key, dict)) {
    console.warn(`Could not get string [${key}] for [${language}]`)
    return dict.en[key]
  }

  return dict[language][key]
}

export default {
  getStringByLanguage,
}
