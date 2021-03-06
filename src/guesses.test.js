import React from 'react'
import { mount } from 'enzyme'

import { findByTestAttr, handleChange } from '../test/testUtils'
import { guessedWordsContext, successContext } from './contexts'
import { Input, GuessedWords } from './components'

function setup(guessedWords = [], secretWord = 'party') {
  const wrapper = mount(
    <guessedWordsContext.GuessedWordsProvider>
      <successContext.SuccessProvider>
        <Input secretWord={secretWord} />
        <GuessedWords />
      </successContext.SuccessProvider>
    </guessedWordsContext.GuessedWordsProvider>
  )

  const inputBox = findByTestAttr(wrapper, 'input-box')
  const submitButton = findByTestAttr(wrapper, 'submit-button')

  // prepopulate guessedWords context by simulating word guess
  if (guessedWords.length > 0) {
    for (const word of guessedWords) {
      handleChange(inputBox, word)
      submitButton.simulate('click')
    }
  }

  return [wrapper, inputBox, submitButton]
}

describe('test word guesses', () => {
  let wrapper, inputBox, submitButton // eslint-disable-line one-var

  beforeEach(() => {
    [wrapper, inputBox, submitButton] = setup('party') // eslint-disable-line prettier/prettier
  })

  afterEach(() => wrapper.update())

  describe('correct guess', () => {
    beforeEach(() => {
      handleChange(inputBox, 'party')
      submitButton.simulate('click')
    })

    test('Input component contains no children', () => {
      const inputComponent = findByTestAttr(wrapper, 'component-input')
      expect(inputComponent.children()).toHaveLength(0)
    })
  })

  describe('incorrect guess', () => {
    beforeEach(() => {
      handleChange(inputBox, 'train')
      submitButton.simulate('click')
    })

    test('Input box remains', () => {
      expect(inputBox.exists()).toBe(true)
    })
  })
})
