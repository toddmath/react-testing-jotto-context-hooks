import React from 'react'
import { mount } from 'enzyme'

import successContext from '../contexts/successContext'
import LanguageContext from '../contexts/languageContext'
import { findByTestAttr, checkProps } from '../../test/testUtils'
import Input from './Input'

const mountSetup = ({ language, secretWord, success }) => {
  return mount(
    <LanguageContext.Provider value={language || 'en'}>
      <successContext.SuccessProvider value={[success || false, jest.fn()]}>
        <Input secretWord={secretWord || 'party'} />
      </successContext.SuccessProvider>
    </LanguageContext.Provider>
  )
}

describe('LanguageContext', () => {
  test('correctly renders submit string in english', () => {
    const wrapper = mountSetup({ language: 'en' })
    // console.log(wrapper.debug())
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
  test('does not thror warning with expected props', () => {
    checkProps(Input, { secretWord: 'party' })
  })

  describe('state control input field', () => {
    // eslint-disable-next-line one-var
    let wrapper, submitButton, mockEvent
    const mockSetCurrentGuess = jest.fn()
    const mockValue = 'train'

    beforeEach(() => {
      mockSetCurrentGuess.mockClear()
      React.useState = jest.fn(() => ['', mockSetCurrentGuess])
      mockEvent = { target: { value: mockValue } }

      wrapper = mountSetup({})
      submitButton = findByTestAttr(wrapper, 'submit-button')
    })

    test('state updates with value of input box upon change', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box')
      inputBox.simulate('change', mockEvent)

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
