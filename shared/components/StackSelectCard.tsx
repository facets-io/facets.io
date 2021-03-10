import React from 'react';
import styled from 'styled-components';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: 200,
        height: 180,
        // maxWidth: 345,
    },
});

const StackSelectCard = ({ logo, label, width = '100rem', height = '100rem' }) => {
    const classes = useStyles();

    return < >
        <Card className={classes.root}>
            <CardActionArea>
                <br />
                <img width={width} height={height} src={logo} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {label}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </>
}

export default StackSelectCard;