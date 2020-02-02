import React from 'react'
import PropTypes from 'prop-types'
import { Form, FormGroup, Label, Input as In } from 'reactstrap'

import languageContext from '../contexts/languageContext'
import stringsModule from '../helpers/strings'

const Input = ({ secretWord }) => {
  const language = React.useContext(languageContext)
  const [currentGuess, setCurrentGuess] = React.useState('')

  const inputPlaceHolder = stringsModule.getStringByLanguage(
    language,
    'guessInputPlaceholder'
  )

  const buttonText = stringsModule.getStringByLanguage(language, 'submit')

  // TODO: update `guessedWords` context
  // TODO: check against `secretWord` and optionally update `success` context
  const handleOnSubmit = e => {
    if (e) e.preventDefault()
    setCurrentGuess('')
  }

  return (
    <div data-test='component-input'>
      <Form inline>
        <FormGroup className='mb-2 mx-sm-3'>
          <Label for='guess' className='mr-2'>
            Next Guess:
          </Label>
          <In
            data-test='input-box'
            type='search'
            name='guess'
            id='guess'
            placeholder={inputPlaceHolder}
            value={currentGuess}
            onChange={e => setCurrentGuess(e.target.value)}
          />
        </FormGroup>
        <button
          data-test='submit-button'
          onClick={e => handleOnSubmit(e)}
          className={`mb-2 btn btn-primary ${language === 'emoji' ? 'px-4' : ''}`}
          type='button'
          color='primary'
        >
          {buttonText}
        </button>
      </Form>
    </div>
  )
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
}

export default Input
