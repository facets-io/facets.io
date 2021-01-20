import React from 'react';

export default ({ text, color = '#A4A7AC', fontSize = 'small', fontFamily= 'Helvetica, Arial, sans-serif'}) => {
    return <span
        style={{
            width: '100%',
            color,
            fontSize,
            fontFamily,
            fontWeight: 500

        }}
    >{text}</span>
}