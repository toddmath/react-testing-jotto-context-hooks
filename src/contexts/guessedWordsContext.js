import React from 'react'

const guessedWordsContext = React.createContext()

/**
 * @function useSuccess
 * @returns {Array} SuccessContext value, which is a state of `[value, setter]`.
 */
function useGuessedWords() {
  const context = React.useContext(guessedWordsContext)

  if (!context) {
    throw new Error('useGuessedWords must be used within a GuessedWordsProvider!')
  }

  return context
}

/**
 * @function SuccessProvider
 * @param {object} props passed through from declared Component.
 * @returns {JSX.Element} Provider Component
 */
function GuessedWordsProvider(props) {
  const [guessedWords, setGuessedWords] = React.useState([])

  const value = React.useMemo(() => [guessedWords, setGuessedWords], [guessedWords])

  return <guessedWordsContext.Provider value={value} {...props} />
}

export default { GuessedWordsProvider, useGuessedWords }
