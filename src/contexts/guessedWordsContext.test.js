import React from 'react'
import { shallow, mount } from 'enzyme'

import { guessedWordsContext } from '.'

/**
 * a functional component that calls useGuessedWords for our tests
 * @returns {JSX.Element}
 */
const FunctionalComponent = () => {
  guessedWordsContext.useGuessedWords()
  return <div />
}

describe('guessedWordsContext', () => {
  test('useGuessedWords throws an error when not wrapped inside GuessedWordsProvider', () => {
    expect(() => {
      shallow(<FunctionalComponent />)
    }).toThrow('useGuessedWords must be used within a GuessedWordsProvider!')
  })

  test('does not throw error when wrapped inside GuessedWordsProvider', () => {
    expect(() => {
      mount(
        <guessedWordsContext.GuessedWordsProvider>
          <FunctionalComponent />
        </guessedWordsContext.GuessedWordsProvider>
      )
    }).not.toThrow()
  })
})
