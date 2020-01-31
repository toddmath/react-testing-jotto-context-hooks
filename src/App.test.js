import React from "react";
import { mount } from "enzyme";

import { findByTestAttr } from "../test/testUtils";
import hookActions from "./actions/hookActions";
import App from "./App";

const mockGetSecretWord = jest.fn();

/**
 * Setup function for App component
 * @returns {ReactWrapper}
 */
const setup = () => {
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;

  // ! using mount becuase useEffect not called with `shallow`
  // ! https://github.com/airbnb/enzyme/issues/2086
  return mount(<App getSecretWord={mockGetSecretWord} />);
};

describe("App component", () => {
  test("App renders without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-app");
    expect(component.length).toBe(1);
  });

  describe("`getSecretWord` calls", () => {
    test("`getSecretWord` gets called on App mount", () => {
      setup();
      expect(mockGetSecretWord).toHaveBeenCalled();
    });
  });
});
