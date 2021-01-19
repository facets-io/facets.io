import React from 'react';

export default ({ text, color = '#A4A7AC', fontSize = 'small' }) => {
    return <span
        style={{
            width: '100%',
            color,
            fontSize,
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 500

        }}
    >{text}</span>
}