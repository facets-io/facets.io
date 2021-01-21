import React from 'react';

export default ({ text, color = '#A4A7AC', fontSize = 'small', fontFamily= 'Helvetica-Bold, Arial, sans-serif', textDecoration = ""}) => {
    return <span
        style={{
            width: '100%',
            color,
            fontSize,
            fontFamily,
            fontWeight: 500,
            textDecoration
        }}
    >{text}</span>
}