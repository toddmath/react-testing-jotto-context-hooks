import React from 'react'

import { languageContext, successContext } from '../contexts'
import str from '../helpers/strings'

const Congrats = () => {
  const language = React.useContext(languageContext)
  const [success] = successContext.useSuccess()

  return (
    <div data-test='component-congrats'>
      {success === true && (
        <div
          data-test='congrats-message'
          className='alert alert-success fade show'
          role='alert'
        >
          {str.getStringByLanguage(language, 'congrats')}
        </div>
      )}
    </div>
  )
}

export default Congrats
