import React from 'react'
import './Button.css'

const Button = ({children, onClick, props}) => {
    
    return (
        <div>
        <button onClick={onClick} {...props} className="button-menu">
            {children}
        </button>
        </div>
    )
}

export default Button
