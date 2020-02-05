/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '../../test/testUtils'
import { guessedWordsContext } from '../contexts'
import { GuessedWords } from '.'

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {Array} guessedWords - guessedWords specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (guessedWords = []) => {
  const mockUseGuessedWords = jest.fn().mockReturnValue([guessedWords, jest.fn()])
  guessedWordsContext.useGuessedWords = mockUseGuessedWords
  return shallow(<GuessedWords />)
}

describe('GuessedWords', () => {
  describe('if there are no words guessed', () => {
    let wrapper

    beforeEach(() => {
      wrapper = setup([])
    })

    afterEach(() => {
      wrapper.update()
    })

    test('renders without error', () => {
      const component = findByTestAttr(wrapper, 'component-guessed-words')
      expect(component).toHaveLength(1)
    })

    test('renders instructions to guess a word', () => {
      const instructions = findByTestAttr(wrapper, 'guess-instructions')
      expect(instructions.text()).not.toHaveLength(0)
      expect(instructions.text()).not.toBeEmpty()
    })
  })

  describe('if there are words guessed', () => {
    let wrapper
    const guessedWords = [
      { guessedWord: 'train', letterMatchCount: 3 },
      { guessedWord: 'agile', letterMatchCount: 1 },
      { guessedWord: 'party', letterMatchCount: 5 },
    ]

    beforeEach(() => {
      wrapper = setup(guessedWords)
    })

    afterEach(() => {
      wrapper.update()
    })

    test('renders without error', () => {
      const component = findByTestAttr(wrapper, 'component-guessed-words')
      expect(component).toHaveLength(1)
    })

    test('renders guessed words section', () => {
      const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words')
      expect(guessedWordsNode).toHaveLength(1)
    })

    test('correct number of guessed words', () => {
      const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word')
      expect(guessedWordNodes).toHaveLength(guessedWords.length)
    })
  })

  describe('languagePicker', () => {
    test('correctly renders guess instructions string in english by default', () => {
      const wrapper = setup([])
      const guessInstructions = findByTestAttr(wrapper, 'guess-instructions')
      expect(guessInstructions.text()).toBe('Try to guess the secret word!')
    })

    test('correctly renders guess instructions string in emoji', () => {
      const mockUseContext = jest.fn().mockReturnValue('emoji')
      React.useContext = mockUseContext
      const wrapper = setup([])
      const guessInstructions = findByTestAttr(wrapper, 'guess-instructions')
      expect(guessInstructions.text()).toBe('🤔🤫🔤')
    })
  })
})
