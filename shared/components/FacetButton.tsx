import { Button } from '@material-ui/core';
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { color } from '../constant';

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
}

export default ({ onClick, text, disabled, colorButtonStyle = defaultColorBtnStyle, ...props }) => {
    const classes = useStyles();

    const ColorButton = withStyles(() => ({
        root: {
            color: colorButtonStyle.color,
            backgroundColor: colorButtonStyle.backgroundColor,
            '&:hover': {
                backgroundColor: colorButtonStyle.backgroundColor,
            },
        },
    }))(Button);

    return <div className={classes.root}>
        <ColorButton
            style={{ width: '100%' }}
            variant="contained"
            disabled={disabled}
            onClick={() => { if (onClick) { onClick() } }}
            size="small"
            {...props}>
            {text}
        </ColorButton>
    </div >
}