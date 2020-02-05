import React from 'react'
import { Table } from 'reactstrap'

import { guessedWordsContext, languageContext } from '../contexts'
import str from '../helpers/strings'

const GuessedWords = () => {
  const language = React.useContext(languageContext)
  const [guessedWords] = guessedWordsContext.useGuessedWords()

  return (
    <div data-test='component-guessed-words'>
      {guessedWords.length === 0 ? (
        <span data-test='guess-instructions'>
          {str.getStringByLanguage(language, 'guessPrompt')}
        </span>
      ) : (
        <div data-test='guessed-words'>
          <h3>{str.getStringByLanguage(language, 'guessedWords')}</h3>
          <Table striped size='sm' responsive>
            <caption>List of guessed words</caption>
            <thead className='thead-dark'>
              <tr>
                <th>#</th>
                <th>{str.getStringByLanguage(language, 'guessColumnHeader')}</th>
                <th>
                  {str.getStringByLanguage(language, 'matchingLettersColumnHeader')}
                </th>
              </tr>
            </thead>
            <tbody>
              {guessedWords.map(({ guessedWord, letterMatchCount }, index) => (
                <tr data-test='guessed-word' key={index}>
                  <th scope='row'>{index + 1}</th>
                  <td>{guessedWord}</td>
                  <td>{letterMatchCount}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  )
}

export default GuessedWords
