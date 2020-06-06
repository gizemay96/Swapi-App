import React from 'react';
import './Button.css';

const Button = ({ onClick, color='default', classNames='', type='button', disabled, children }) => {
  const btnClasses = `btn btn-${color} ${classNames}`

  return (
    <button className={btnClasses} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button;