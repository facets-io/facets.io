import React from 'react';

export default ({ text, color = '#A4A7AC', fontSize = 'small', fontFamily= 'Helvetica', textDecoration = "", fontWeight = 500, backgroundColor = ""}) => {
    return <span
        style={{
            width: '100%',
            color,
            fontSize,
            fontFamily,
            fontWeight,
            textDecoration,
            backgroundColor
        }}
    >{text}</span>
}