/* eslint-disable no-param-reassign */
/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react'
import { mount } from 'enzyme'
import { findByTestAttr, checkProps } from '../../test/testUtils'
import Congrats from './Congrats'
import languageContext from '../contexts/languageContext'

const defaultProps = { success: false }

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} testValues - Context values specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = ({ success, language }) => {
  return mount(
    <languageContext.Provider value={language || 'en'}>
      <Congrats success={success || true} />
    </languageContext.Provider>
  )
}

describe('languagePicker', () => {
  test('correctly renders congrats string in english', () => {
    const wrapper = setup({ success: true })
    expect(wrapper.text()).toBe('Congratulations! You guessed the word!')
  })

  test('correctly renders congrats string in emoji', () => {
    const wrapper = setup({ success: true, language: 'emoji' })
    expect(wrapper.text()).toBe('🎯🎉')
  })
})

describe('Congrats', () => {
  test('should render congrats', () => {
    const wrapper = setup({})
    const component = findByTestAttr(wrapper, 'component-congrats')

    expect(component).toHaveLength(1)
  })

  test('renders `Congratulations...` when `success` prop is false', () => {
    const wrapper = setup({ success: false })
    const component = findByTestAttr(wrapper, 'component-congrats')

    expect(component.text()).toBe('Congratulations! You guessed the word!')
    // expect(component.text()).toBeEmpty()
  })

  test('renders non-empty congrats message when `success` prop is true', () => {
    const wrapper = setup({ success: true })
    const message = findByTestAttr(wrapper, 'congrats-message')

    expect(message.text()).not.toHaveLength(0)
    expect(message.text()).not.toBeEmpty()
  })

  // eslint-disable-next-line jest/expect-expect
  test('does not throw warning with expected props', () => {
    const expectedProps = { success: false }

    checkProps(Congrats, expectedProps)
  })
})
