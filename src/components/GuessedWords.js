import React from "react";
import PropTypes from "prop-types";
import { Table } from "reactstrap";

const GuessedWords = ({ guessedWords }) => (
  <div data-test="component-guessed-words">
    {guessedWords.length === 0 ? (
      <span data-test="guessed-instructions">
        Try to guess the secret word!
      </span>
    ) : (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <Table striped size="sm" responsive>
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>
            {guessedWords.map(({ guessedWord, letterMatchCount }, index) => (
              <tr data-test="guessed-word" key={index}>
                <th scope="row">{index + 1}</th>
                <td>{guessedWord}</td>
                <td>{letterMatchCount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )}
  </div>
);

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessedWords;
