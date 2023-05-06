import React from 'react'
import '../css/Button.css'


const Button = (props) => {

    const isOperator = (valor) =>{
        return isNaN(valor) && (valor !== '.') && (valor !== '=')
    }

    return (
        <div className={`button-container ${isOperator(props.children) ? 'operator' : '' }`.trim()} onClick={() => props.handleClick(props.children)}>
            {props.children}
        </div>
    );
}

export default Button