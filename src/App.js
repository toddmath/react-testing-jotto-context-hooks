import React from "react";
import { Container } from "reactstrap";
// import { Congrats, GuessedWords } from "./components";

import hookActions from "./actions/hookActions";
import "./App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "setSecretWord":
      return { ...state, secretWord: action.payload };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
};

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, { secretWord: null });
  const setSecretWord = secretWord =>
    dispatch({ type: "setSecretWord", payload: secretWord });

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  return (
    <div data-test="component-app">
      <Container>App</Container>
    </div>
  );
};

export default App;
