/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from '../../test/testUtils'
import Congrats from './Congrats'

const defaultProps = { success: false }

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Congrats {...setupProps} />)
}

describe('Congrats', () => {
  test('should render congrats', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'component-congrats')

    expect(component).toHaveLength(1)
  })

  test('renders no text when `success` prop is false', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'component-congrats')

    expect(component.text()).toBe('')
    expect(component.text()).toBeEmpty()
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
