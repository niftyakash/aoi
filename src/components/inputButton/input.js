import React from 'react'

function Input(props) {
    const {type, placeholder, isDisabled, value='', defaultValue=''} = props
  return (
    <div>
        <input 
            type={type} 
            placeholder={placeholder}
            disabled={isDisabled}
            value={value}
            defaultValue={defaultValue}
        />
    </div>
  )
}

export default Input