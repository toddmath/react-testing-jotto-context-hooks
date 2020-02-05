import React from 'react'
import { mount } from 'enzyme'

import { findByTestAttr } from '../test/testUtils'
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
    // eslint-disable-next-line prettier/prettier
    [...guessedWords].forEach(word => {
      const mockEvent = { target: { value: word } }
      inputBox.simulate('change', mockEvent)
      submitButton.simulate('click')
    })
  }

  return [wrapper, inputBox, submitButton]
}

describe('test word guesses', () => {
  let wrapper, inputBox, submitButton // eslint-disable-line one-var

  beforeEach(() => {
    ;[wrapper, inputBox, submitButton] = setup('party') // eslint-disable-line prettier/prettier
  })

  describe('correct guess', () => {
    beforeEach(() => {
      const mockEvent = { target: { value: 'party' } }
      inputBox.simulate('change', mockEvent)
      submitButton.simulate('click')
    })

    test('Input component contains no children', () => {
      const inputComponent = findByTestAttr(wrapper, 'component-input')
      expect(inputComponent.children()).toHaveLength(0)
    })
  })

  describe('incorrect guess', () => {
    beforeEach(() => {
      const mockEvent = { target: { value: 'train' } }
      inputBox.simulate('change', mockEvent)
      submitButton.simulate('click')
    })

    test('Input box remains', () => {
      expect(inputBox.exists()).toBe(true)
    })
  })
})
