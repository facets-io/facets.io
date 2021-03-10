import React from 'react';
import styled from 'styled-components';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

const Grid = styled.div`
    display: grid;
    text-align: center;
    justify-content: center;
    grid-column: 1 / span 2;
`;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'grid'
        },
    }),
);

const StackSelectCard = ({ logo, label }) => {

    return < >
        <Grid>
            <div>
                <img width="100rem" height="100rem" src={logo} />
            </div>
            <div>
                <span>{label}</span>
            </div>
        </Grid>
    </>
}

export default StackSelectCard;