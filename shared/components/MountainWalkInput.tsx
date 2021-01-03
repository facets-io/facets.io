import { makeStyles, withStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';

import { color as colorConstant } from '../constant';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '20rem',
        borderRadius: '1rem',
        backgroundColor: `${colorConstant.grayA}`
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        color: colorConstant.white
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

export default () => {
    const classes = useStyles();

    return <Paper className={classes.root}>
        <InputBase
            className={classes.input}
            placeholder="Type your search here"
            inputProps={{ 'aria-label': 'mountain-walk search' }}
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon style={{ color: colorConstant.white }} />
        </IconButton>
    </Paper>
}