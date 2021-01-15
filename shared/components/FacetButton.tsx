import { Button } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { color } from '../constant';
import styled from 'styled-components';

const useStyles = makeStyles(() => ({ root: {} }));

const defaultColorBtnStyle = {
    color: color.black,
    backgroundColor: color.ice,
    hoverBgColor: color.electricB
};

export const electricBtnColor = {
    color: color.white,
    backgroundColor: color.electricA,
    hoverBgColor: color.electricB
};

// @deprecated
export const greenBtnColor = {
    color: color.black,
    backgroundColor: color.green,
    hoverBgColor: color.darkerGreen
}

export const whiteBtnColor = {
    color: color.black,
    backgroundColor: color.white,
    hoverBgColor: color.white
}

// not working..
const StyledButton = styled(Button)`
    color: ${props => props.colorButtonStyle.color}!important;
    background-color: ${props => props.colorButtonStyle.backgroundColor}!important;
    width: ${props => props.width ? props.width : '100%'};
`;

export default ({ onClick = () => { }, text, disabled = false, colorButtonStyle = defaultColorBtnStyle, ...props }) => {
    const classes = useStyles();

    return <div className={classes.root}>
        <StyledButton
            colorButtonStyle={colorButtonStyle}
            style={{ width: props.width ? props.width : '100%', height: '100%', borderRadius: 0 }}
            variant="contained"
            disabled={disabled}
            onClick={() => { if (onClick) { onClick() } }}
            size="small"
            {...props}>
            {text}
        </StyledButton>
    </div >
}