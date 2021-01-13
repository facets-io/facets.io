import { Divider, makeStyles } from "@material-ui/core"
import { color } from "../constant";

const useStyles = makeStyles(() => ({
    divider: {
        backgroundColor: color.grayA,
    },
}));

export default () => {
    const classes = useStyles();

    return <Divider className={classes.divider} />
}