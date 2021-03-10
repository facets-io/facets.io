import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import { color } from '../constant';
import { withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        width: 150,
        height: 180,
    },
});

const PrimaryTextTypography = withStyles({
    root: {
        color: color.primary,
        fontWeight: 'bold'
    }
})(Typography);

const StackSelectCard = ({ logo, label, linkUrl = '/documentation', width = '100rem', height = '100rem' }) => {
    const classes = useStyles();

    return < >
        <Link href={linkUrl}>
            <Card className={classes.root}>
                <CardActionArea>
                    <br />
                    <img width={width} height={height} src={logo} />
                    <CardContent>
                        <PrimaryTextTypography>
                            {label}
                        </PrimaryTextTypography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    </>
}

export default StackSelectCard;