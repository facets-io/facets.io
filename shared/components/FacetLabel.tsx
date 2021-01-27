import React from 'react';
import {color as colors} from "../constant";

export default ({ text, color = colors.black, fontSize = 'small', fontFamily= 'Helvetica', textDecoration = "", fontWeight = 500, backgroundColor = "", border="", borderRadius="",  padding="0", paddingTop= "0", paddingBottom="0"},) => {
    return <span
        style={{
            width: '100%',
            color,
            fontSize,
            fontFamily,
            fontWeight,
            textDecoration,
            backgroundColor,
            border,
            borderRadius,
            padding,
            paddingTop,
            paddingBottom
        }}
    >{text}</span>
}