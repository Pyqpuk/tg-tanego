import React from 'react';
import './Button.css'

const Button = (props) => {
    return (
        <butto {...props} className ={'button'+ props.className}/>
    );
};

export default Button;
