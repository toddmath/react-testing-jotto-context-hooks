import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'reactstrap'

import { successContext, languageContext } from '../contexts'
import str from '../helpers/strings'

const Input = ({ secretWord }) => {
  const language = React.useContext(languageContext)
  const [success, setSuccess] = successContext.useSuccess()
  const [currentGuess, setCurrentGuess] = React.useState('')

  const inputPlaceHolder = str.getStringByLanguage(language, 'guessInputPlaceholder')
  const buttonText = str.getStringByLanguage(language, 'submit')

  // TODO: update `guessedWords` context
  const handleOnSubmit = e => {
    if (e) e.preventDefault()
    if (currentGuess === secretWord) {
      setSuccess(true)
    }
    setCurrentGuess('')
  }

  const handleChange = e => {
    if (e) e.preventDefault()
    setCurrentGuess(e.target.value)
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
            onChange={handleChange}
            aria-label='Username'
            aria-describedby='submit-button'
          />
          <div className='input-group-prepend'>
            <button
              data-test='submit-button'
              id='submit-button'
              onClick={e => handleOnSubmit(e)}
              className={`btn btn-primary ${language === 'emoji' ? 'px-4' : ''}`}
              type='button'
              color='primary'
            >
              {buttonText}
            </button>
          </div>
        </div>
      </Form>
    </div>
  )
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
}

export default Input
