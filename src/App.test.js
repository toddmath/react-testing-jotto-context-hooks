/* eslint-disable jest/no-commented-out-tests */
/* eslint-disable import/no-named-as-default-member */
import React from 'react'
import { mount } from 'enzyme'

import { findByTestAttr, createMockReturn } from '../test/testUtils'
import hookActions from './actions/hookActions'
import App from './App'

const mockGetSecretWord = jest.fn()

/**
 * Setup function for App component
 * @param {string} secretWord desired secretWord state value for test.
 * @returns {ReactWrapper} returns `mount` becuase useEffect not called with `shallow`
 * @see https://github.com/airbnb/enzyme/issues/2086
 */
function setup(secretWord) {
  mockGetSecretWord.mockClear()
  hookActions.getSecretWord = mockGetSecretWord
  const mockReturn = [{ secretWord, language: 'en' }, jest.fn()]
  React.useReducer = createMockReturn(mockReturn)

  return mount(<App />)
}

describe('App component', () => {
  // test("App renders without error", () => {
  //   // const wrapper = setup();
  //   const wrapper = setup();
  //   wrapper.update();
  //   console.log(wrapper.debug());
  //   const component = findByTestAttr(wrapper, "component-app");
  //   expect(component.length).toBeGreaterThan(0);
  // });

  describe('`getSecretWord` calls', () => {
    test('`getSecretWord` gets called on App mount', () => {
      setup()
      expect(mockGetSecretWord).toHaveBeenCalled()
      expect(mockGetSecretWord.mock.calls).toHaveLength(1)
    })
  })

  // test("secretWord does not update on App update", () => {
  //   const wrapper = setup();
  //   console.log(wrapper.debug());
  //   mockGetSecretWord.mockClear();

  /**
   * issue with update() see:
   * @see {@link https://github.com/airbnb/enzyme/issues/2254}
   */
  //   wrapper.setProps();

  //   expect(mockGetSecretWord).not.toHaveBeenCalled();
  // });

  describe('secretWord is not null', () => {
    let wrapper

    beforeEach(() => {
      wrapper = setup('party')
    })

    afterEach(() => wrapper.update())

    // test("renders app", () => {
    //   const appComponent = findByTestAttr(wrapper, "component-app");
    //   expect(appComponent.exists()).toBe(true);
    // });

    // test("does not render spinner", () => {
    //   const spinnerComponent = findByTestAttr(wrapper, "component-spinner");
    //   expect(spinnerComponent.exists()).toBe(false);
    // });
  })

  describe('secretWord is null', () => {
    let wrapper

    beforeEach(() => {
      wrapper = setup(null)
    })

    test('does not render app', () => {
      const appComponent = findByTestAttr(wrapper, 'component-app')
      expect(appComponent.exists()).toBe(false)
    })

    test('renders spinner', () => {
      const spinnerComponent = findByTestAttr(wrapper, 'component-spinner')
      expect(spinnerComponent.exists()).toBe(true)
    })
  })
})
