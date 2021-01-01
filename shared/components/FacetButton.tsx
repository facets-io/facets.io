import { Button } from '@material-ui/core';
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { color } from '../constant';

const ColorButton = withStyles(() => ({
    root: {
        color: color.grayA,
        backgroundColor: color.ice,
        '&:hover': {
            backgroundColor: color.electricB,
        },
    },
}))(Button);

const useStyles = makeStyles(() => ({ root: {} }));

export default ({ onClick, text, disabled, ...props }) => {
    const classes = useStyles();

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