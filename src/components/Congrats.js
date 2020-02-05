import React from 'react'

import successContext from '../contexts/successContext'
import languageContext from '../contexts/languageContext'
import str from '../helpers/strings'

const Congrats = () => {
  const language = React.useContext(languageContext)
  const [success] = successContext.useSuccess()

  return (
    <div data-test='component-congrats'>
      {success === true && (
        <span
          data-test='congrats-message'
          className='alert alert-success'
          role='alert'
        >
          {str.getStringByLanguage(language, 'congrats')}
        </span>
      )}
    </div>
  )
}

export default Congrats
