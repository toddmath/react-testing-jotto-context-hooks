import React from "react";
import PropTypes from "prop-types";

import { Alert } from "reactstrap";

const Congrats = ({ success }) => (
  <div data-test="component-congrats">
    {success === true && (
      <Alert color="success">
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      </Alert>
    )}
  </div>
);

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

export default Congrats;
