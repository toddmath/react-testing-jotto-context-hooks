import React, { useEffect, useReducer } from "react";
import { Container, Alert, Spinner } from "reactstrap";

import hookActions from "./actions/hookActions";
import { Input } from "./components";
// import FulfillingSquareSpinner from "@bit/bondz.react-epic-spinners.fulfilling-square-spinner";
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
  const [state, dispatch] = useReducer(reducer, {
    secretWord: null
  });
  const setSecretWord = secretWord =>
    dispatch({ type: "setSecretWord", payload: secretWord });

  useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  // if (!state.secretWord) {
  //   return (
  //     <div data-test="component-spinner">
  //       <Container
  //         className="themed-container min-vh-100 min-vw-100 d-flex flex-column justify-content-center align-items-center"
  //         fluid={true}
  //       >
  //         <div className="d-flex flex-row">
  //           <Spinner
  //             color="primary"
  //             style={{ width: "20vmin", height: "20vmin" }}
  //             role="status"
  //             className="flex-fill m-auto"
  //           />
  //         </div>
  //         <div className="d-flex flex-row">
  //           <Alert className="flex-fill my-4" color="info">
  //             Loading secret word...
  //           </Alert>
  //         </div>
  //       </Container>
  //     </div>
  //   );
  // }

  /*
    <FulfillingSquareSpinner
      color="#2962ff"
      animationDuration={2250}
      size={180}
      className="flex-fill m-auto"
    />
  */

  return (
    <div>
      {!state.secretWord ? (
        <div data-test="component-spinner">
          <Container
            className="themed-container min-vh-100 min-vw-100 d-flex flex-column justify-content-center align-items-center"
            fluid={true}
          >
            <div className="d-flex flex-row">
              <Spinner
                color="primary"
                style={{ width: "17vmin", height: "17vmin" }}
                role="status"
                className="flex-fill m-auto"
              />
            </div>
            <div className="d-flex flex-row">
              <Alert className="flex-fill my-4" color="info">
                Loading secret word...
              </Alert>
            </div>
          </Container>
        </div>
      ) : (
        <div data-test="component-app">
          <Container>
            <Input secretWord={state.secretWord} />
          </Container>
        </div>
      )}
    </div>
  );
};

export default App;
