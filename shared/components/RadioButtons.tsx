import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import { color } from '../constant';
import FacetLabel from './FacetLabel';
import styled from 'styled-components';

const IceRadio = withStyles({
    root: {
        '&$checked': {
            color: color.ice,
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: 3.5rem 3.5rem;
`

export default function RadioButtons() {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <StyledGrid>

            <IceRadio
                /* @ts-ignore */
                checked={selectedValue === 'a'}
                onChange={handleChange}
                value="a"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'C' }}
            />
            <FacetLabel text='No' />
            <IceRadio
                /* @ts-ignore */
                checked={selectedValue === 'b'}
                onChange={handleChange}
                value="b"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'C' }}
            />
            <FacetLabel text='Yes' />

        </StyledGrid>
    );
}