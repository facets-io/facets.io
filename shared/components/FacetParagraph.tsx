import React from 'react';

export default ({ text, color = '#676767', fontSize = 'medium' }) => {
    return <span
        style={{
            width: '100%',
            color,
            fontSize,
            fontFamily: 'Futura'

        }}
    >{text}</span>
}