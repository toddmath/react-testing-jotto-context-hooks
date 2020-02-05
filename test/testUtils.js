/* eslint-disable react/forbid-foreign-prop-types */
import checkPropTypes from 'check-prop-types'

const dataTest = str => `[data-test="${str}"]`

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => wrapper.find(dataTest(val))

/**
 * Throw error if conformingProps do not pass propTypes validation.
 * @param {React.Component} component Component to check props against.
 * @param {object} conformingProps Props we expect to conform to defined propTypes.
 */
const checkProps = (component, conformingProps) => {
  const { propTypes, name } = component
  const propError = checkPropTypes(propTypes, conformingProps, 'prop', name)
  expect(propError).toBeUndefined()
}

/**
 * Helper function to attach an onChange event listener and mock value for tests
 * @param {HTMLElement} elem Element to attach event listener onto
 * @param {string} value mock value to simulate the event with
 */
function handleChange(elem, value) {
  elem.simulate('change', { target: { value } })
}

/**
 * Helper function to create a mock `jest.fn` with attached `returnMockValue`.
 * @param {*} returnVal Value('s) to inject into `mockReturnValue` method.
 * @param {Function} [mockFunc=null] Function to inject into mock `jest.fn`.
 * @param {string} [name=null] Optional name to give to mock function.
 */
function createMockReturn(returnVal, mockFunc = null, name = null) {
  const output = jest.fn(mockFunc).mockReturnValue(returnVal)
  return name ? output.mockName(String(name)) : output
}

export { findByTestAttr, checkProps, handleChange, createMockReturn }
