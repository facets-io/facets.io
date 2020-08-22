import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";

const StyledDiv = styled.div`
    width: 35rem;
    margin-left: 2rem;
    margin-top: .5rem;
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

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('gg!')
    }

    const { classes } = props;
    const [emailValue, setEmailValue] = useState('');

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
                                label="example@domain.com"
                                variant="filled"
                                color="secondary"
                                value={emailValue}
                                onChange={(e) => { setEmailValue(e.target.value) }}
                                type="email" name="EMAIL" placeholder="example@domain.com"></TextField>
                            {/* <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="example@domain.com" /> */}
                            <Button size='medium' variant="contained" color="secondary" type="submit" value="Subscribe" name="subscribe" >Subscribe</Button>
                        </GridDiv>
                    </div>
                    <div id="mce-responses" class="clear">
                        <div class="response" id="mce-error-response"></div>
                        <div class="response" id="mce-success-response"></div>
                    </div>

                    {/* <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" />
                </div> */}
                </div>
            </form>
        </StyledDiv>
    </div>
}

export default withStyles(styles)(Subscribe);
