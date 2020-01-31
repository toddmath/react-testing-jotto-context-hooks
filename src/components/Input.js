import React from "react";
import PropTypes from "prop-types";

import { Form, FormGroup, Label, Button, Input as In } from "reactstrap";

const Input = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState("");

  // TODO: update `guessedWords` context
  // TODO: check against `secretWord` and optionally update `success` context
  const handleOnSubmit = e => {
    if (e) e.preventDefault();
    setCurrentGuess("");
  };

  return (
    <div data-test="component-input">
      <Form inline>
        <FormGroup className="mb-2 mx-sm-3">
          <Label for="guess">Next Guess:</Label>
          <In
            data-test="input-box"
            type="search"
            name="guess"
            id="guess"
            placeholder="five-letter guess"
            value={currentGuess}
            onChange={e => setCurrentGuess(e.target.value)}
          />
        </FormGroup>
        <Button
          data-test="submit-button"
          onClick={e => handleOnSubmit(e)}
          className="mb-2"
          color="primary"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired
};

export default Input;
