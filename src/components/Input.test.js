import React from 'react'
import { mount } from 'enzyme'

import { languageContext, successContext } from '../contexts'
import { findByTestAttr, checkProps, handleChange } from '../../test/testUtils'
import { Input } from '.'

function mountSetup({ language, secretWord, success }) {
  return mount(
    <languageContext.Provider value={language || 'en'}>
      <successContext.SuccessProvider value={[success || false, jest.fn()]}>
        <Input secretWord={secretWord || 'party'} />
      </successContext.SuccessProvider>
    </languageContext.Provider>
  )
}

describe('LanguageContext', () => {
  test('correctly renders submit string in english', () => {
    const wrapper = mountSetup({ language: 'en' })
    const submitButton = findByTestAttr(wrapper, 'submit-button')
    expect(submitButton.text()).toBe('Submit')
  })

  test('correctly renders congrats string in emoji', () => {
    const wrapper = mountSetup({ language: 'emoji' })
    const submitButton = findByTestAttr(wrapper, 'submit-button')
    expect(submitButton.text()).toBe('🚀')
  })
})

describe('Input', () => {
  test('renders without error', () => {
    const wrapper = mountSetup({})
    const input = findByTestAttr(wrapper, 'component-input')
    expect(input).toHaveLength(1)
  })

  // eslint-disable-next-line jest/expect-expect
  test('does not throw warning with expected props', () => {
    checkProps(Input, { secretWord: 'party' })
  })

  describe('state control input field', () => {
    // eslint-disable-next-line one-var
    let wrapper, submitButton
    const mockSetCurrentGuess = jest.fn()
    const mockValue = 'train'

    beforeEach(() => {
      mockSetCurrentGuess.mockClear()
      React.useState = jest.fn(() => ['', mockSetCurrentGuess])
      wrapper = mountSetup({})
      submitButton = findByTestAttr(wrapper, 'submit-button')
    })

    afterEach(() => wrapper.update())

    test('state updates with value of input box upon change', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box')
      handleChange(inputBox, mockValue)
      expect(mockSetCurrentGuess).toHaveBeenCalledWith(mockValue)
    })

    test('state updates and clears upon submit', () => {
      submitButton.simulate('click')
      expect(mockSetCurrentGuess).toHaveBeenCalled()
      expect(mockSetCurrentGuess).toHaveBeenCalledWith('')
    })
  })

  test('input component does not show when success is true', () => {
    const wrapper = mountSetup({ secretWord: 'party', success: true })
    expect(wrapper.isEmptyRender()).toBe(true)
  })
})
