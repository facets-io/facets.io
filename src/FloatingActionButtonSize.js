import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export default function FloatingActionButtonSize({ isAdd = true, disabled = false, onClick }) {
    const classes = useStyles();

    return (
        <Fab onClick={onClick} disabled={disabled} color="secondary" aria-label="add" className={classes.margin}>
            {isAdd ? <AddIcon /> : <DeleteIcon />}
        </Fab>
    );
}