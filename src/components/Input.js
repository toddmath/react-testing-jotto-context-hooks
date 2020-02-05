import React from 'react'
import PropTypes from 'prop-types'
import { Form, FormGroup, Input as In } from 'reactstrap'

import successContext from '../contexts/successContext'
import languageContext from '../contexts/languageContext'
import str from '../helpers/strings'

const Input = ({ secretWord }) => {
  const language = React.useContext(languageContext)
  const [success, setSuccess] = successContext.useSuccess()
  const [currentGuess, setCurrentGuess] = React.useState('')

  const inputPlaceHolder = str.getStringByLanguage(language, 'guessInputPlaceholder')

  const buttonText = str.getStringByLanguage(language, 'submit')

  // TODO: update `guessedWords` context
  // TODO: check against `secretWord` and optionally update `success` context
  const handleOnSubmit = e => {
    if (e) e.preventDefault()
    setCurrentGuess('')
  }

  if (success) return null

  return (
    <div data-test='component-input'>
      <Form inline>
        <div className='input-group flex-nowrap mb-2 mx-sm-3'>
          <input
            data-test='input-box'
            name='guess'
            id='guess'
            type='text'
            className='form-control'
            placeholder={inputPlaceHolder}
            value={currentGuess}
            onChange={e => setCurrentGuess(e.target.value)}
            aria-label='Username'
          />
        </div>
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
