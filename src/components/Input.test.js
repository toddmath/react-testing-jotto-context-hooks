import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../../test/testUtils";
import Input from "./Input";

/**
 * Setup function for Input component
 * @return {ShallowWrapper}
 */
const setup = (secretWord = "party") => {
  return shallow(<Input secretWord={secretWord} />);
};

describe("Input", () => {
  test("renders without error", () => {
    const wrapper = setup();
    const input = findByTestAttr(wrapper, "component-input");
    expect(input.length).toBe(1);
  });

  test("does not thro warning with expected props", () => {
    checkProps(Input, { secretWord: "party" });
  });

  describe("state control input field", () => {
    let wrapper,
      inputBox,
      submitButton,
      mockSetCurrentGuess,
      mockEvent,
      mockValue;

    beforeEach(() => {
      mockValue = "train";
      mockSetCurrentGuess = jest.fn();
      React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
      mockEvent = { target: { value: mockValue } };

      wrapper = setup();
      inputBox = findByTestAttr(wrapper, "input-box");
      submitButton = findByTestAttr(wrapper, "submit-button");
    });

    test("state updates with value of input box upon change", () => {
      inputBox.simulate("change", mockEvent);

      expect(mockSetCurrentGuess).toHaveBeenCalledWith(mockValue);
    });

    test("state updates and clears upon submit", () => {
      submitButton.simulate("click");

      expect(mockSetCurrentGuess).toHaveBeenCalled();
    });
  });
});
