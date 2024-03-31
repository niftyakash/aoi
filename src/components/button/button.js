import React from 'react'

function Button(props) {
    const {buttonName, isDisabled} = props;
  return (
    <div>
        <button disabled={isDisabled}>
            {buttonName}
        </button>
    </div>
  )
}

export default Button