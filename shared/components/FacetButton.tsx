import { Button } from '@material-ui/core';
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { color } from '../constant';

const useStyles = makeStyles(() => ({ root: {} }));

const defaultColorBtnColor = {
    color: color.black,
    backgroundColor: color.ice,
    hoverBgColor: color.electricB
};

export default ({ onClick, text, disabled, colorButtonColor = defaultColorBtnColor, ...props }) => {
    const classes = useStyles();

    const ColorButton = withStyles(() => ({
        root: {
            color: colorButtonColor.color,
            backgroundColor: colorButtonColor.backgroundColor,
            '&:hover': {
                backgroundColor: colorButtonColor.backgroundColor,
            },
        },
    }))(Button);

    return <div className={classes.root}>
        <ColorButton
            style={{ width: '100%' }}
            variant="contained"
            disabled={disabled}
            onClick={() => { onClick() }}
            size="small"
            {...props}>
            {text}
        </ColorButton>
    </div >
}