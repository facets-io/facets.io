import React from 'react';
import {color as colors, fontSize} from '../constant';

export default ({ text, color = colors.black, fontSize = 'medium' }) => {
    return <span
        style={{
            width: '100%',
            color,
            fontSize,
            fontFamily: 'Manrope',
            lineHeight: '168.1%'

        }}
    >{text}</span>
}