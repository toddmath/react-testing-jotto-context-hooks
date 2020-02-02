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

export { findByTestAttr, checkProps }
