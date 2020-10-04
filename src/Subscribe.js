import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import { useSnackbar } from 'notistack';
import jsonp from 'jsonp';

const StyledDiv = styled.div`
    width: 35rem;
    margin-left: 2rem;
`;

const GridDiv = styled.div`
    display: grid;
    grid-template-columns: 60% 30%;
    grid-gap: .5rem;
`;

const styles = {
    root: {
        background: 'white'
    },
    input: {
        color: 'white'
    },
};

const Subscribe = (props) => {

    const { classes } = props;
    const { enqueueSnackbar } = useSnackbar();
    const [emailValue, setEmailValue] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        const url = `https://ninja.us17.list-manage.com/subscribe/post?u=8be72dd4e67ab3df3baeae4ff&amp&id=cd4710e2ed&EMAIL=${emailValue}`;

        // const params = toQueryString(emailValue);
        const ajaxURL = url.replace("/post?", "/post-json?");
        const newUrl = ajaxURL;

        jsonp(newUrl, { param: "c" }, (err, data) => {
            // console.log('err', err, 'data', data);
            if (err) {
                enqueueSnackbar(`Apologies 😞 Something went wrong. Please try again later.`, { variant: "error" });

                // console.log(err);
            } else if (data.result !== "success") {
                if (data.msg.includes('is already')) {
                    enqueueSnackbar(`You have already subsribed. Thank you! 🤗`, { variant: "success" });
                } else {
                    enqueueSnackbar(`${data.msg}`, { variant: "info" });
                }

            } else {
                enqueueSnackbar(`Thank you for subscribing!`, { variant: "success" });

            }
        });
    }


    return <div>
        <StyledDiv >
            <form onSubmit={onSubmit} className='validate'>
                <div>
                    <h2 className={classes.input}>Get our newsletter</h2>
                    <div>
                        <GridDiv>
                            <TextField
                                className={classes.root}
                                id="filled-secondary"
                                label="insert your email"
                                variant="filled"
                                value={emailValue}
                                onChange={(e) => { setEmailValue(e.target.value) }}
                                type="email" name="EMAIL" placeholder="example@domain.com"></TextField>
                            <Button size='medium' variant="contained" color="secondary" type="submit" value="Subscribe" name="subscribe" >Subscribe</Button>
                        </GridDiv>
                    </div>
                </div>
            </form>
        </StyledDiv>
        <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/zr6Ul_1DU3I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
}

export default withStyles(styles)(Subscribe);
