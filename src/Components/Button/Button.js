import React from 'react'
import './Button.css'

const Button = ({children, onClick, props}) => {
    // testando
    
    return (
        <div>
        <button onClick={onClick} {...props} className="button-menu">
            {children}
        </button>
        </div>
    )
}

export default Button
