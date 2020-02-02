/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react'
import PropTypes from 'prop-types'

const LanguagePicker = ({ setLanguage }) => {
  const languages = [
    { code: 'en', symbol: '🇺🇸' },
    { code: 'emoji', symbol: '😊' },
  ]

  return (
    <div data-test='component-language-picker'>
      {languages.map(({ code, symbol }) => (
        <span
          data-test='language-icon'
          key={code}
          role='button'
          onClick={() => setLanguage(code)}
        >
          {symbol}
        </span>
      ))}
    </div>
  )
}

LanguagePicker.propTypes = {
  setLanguage: PropTypes.func.isRequired,
}

export default LanguagePicker
