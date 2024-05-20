import DOMPurify from 'dompurify'
import React from 'react'


const Button = ({ btClass, btnType, innerText, clickHandler, param }) => {
  const sanitizedHTML = DOMPurify.sanitize(innerText);

    return (
    <button
     type={btnType}
     className={btClass}
     dangerouslySetInnerHTML={{__html: sanitizedHTML}}
     onClick={()=>clickHandler(param)}
     />
  )
}

export default Button