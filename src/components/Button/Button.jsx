import React from 'react';

const Button = (props) => {
    return (
        <butto {...props} className ={'button'+ props.className}/>
    );
};

export default Button;
