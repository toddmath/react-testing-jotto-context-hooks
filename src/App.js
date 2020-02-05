/* eslint-disable import/no-named-as-default-member */
import React, { useEffect, useReducer } from 'react'
import { Container, Alert, Spinner } from 'reactstrap'

import { guessedWordsContext, languageContext, successContext } from './contexts'
import hookActions from './actions/hookActions'
import { Input, LanguagePicker, Congrats, GuessedWords } from './components'
// import FulfillingSquareSpinner from "@bit/bondz.react-epic-spinners.fulfilling-square-spinner";
import './App.css'

const reducer = (state, action) => {
  switch (action.type) {
    case 'setSecretWord':
      return { ...state, secretWord: action.payload }
    case 'setLanguage':
      return { ...state, language: action.payload }
    default:
      throw new Error(`Invalid action type: ${action.type}`)
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    secretWord: null,
    language: 'en',
  })

  const setSecretWord = secretWord =>
    dispatch({ type: 'setSecretWord', payload: secretWord })

  const setLanguage = language =>
    dispatch({ type: 'setLanguage', payload: language })

  useEffect(() => {
    hookActions.getSecretWord(setSecretWord)
  }, [])

  const { secretWord, language } = state

  return (
    <div>
      {!secretWord ? (
        <div data-test='component-spinner'>
          <Container
            className='themed-container min-vh-100 min-vw-100 d-flex flex-column justify-content-center align-items-center'
            fluid
          >
            <div className='d-flex flex-row'>
              <Spinner
                color='primary'
                style={{ width: '17vmin', height: '17vmin' }}
                role='status'
                className='flex-fill m-auto'
              />
            </div>
            <div className='d-flex flex-row'>
              <Alert className='flex-fill my-4' color='info'>
                Loading secret word...
              </Alert>
            </div>
          </Container>
        </div>
      ) : (
        <div data-test='component-app'>
          <Container>
            <h1 className='display-3'>Jotto</h1>
            <guessedWordsContext.GuessedWordsProvider>
              <languageContext.Provider value={language}>
                <LanguagePicker setLanguage={setLanguage} />
                <successContext.SuccessProvider>
                  <Congrats />
                  <Input secretWord={secretWord} />
                </successContext.SuccessProvider>
                <GuessedWords />
              </languageContext.Provider>
            </guessedWordsContext.GuessedWordsProvider>
          </Container>
        </div>
      )}
    </div>
  )
}

export default App
