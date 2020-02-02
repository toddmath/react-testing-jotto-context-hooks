import React from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'reactstrap'

import languageContext from '../contexts/languageContext'
import stringsModule from '../helpers/strings'

const Congrats = ({ success }) => {
  const language = React.useContext(languageContext)

  return (
    <div data-test='component-congrats'>
      {success === true && (
        <Alert color='success'>
          <span data-test='congrats-message'>
            {stringsModule.getStringByLanguage(language, 'congrats')}
          </span>
        </Alert>
      )}
    </div>
  )
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
}

export default Congrats
