import React from 'react';
import { withStyles } from '@material-ui/core/styles';
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
    const [selectedValue, setSelectedValue] = React.useState('no');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <StyledGrid>
            <div>
                <IceRadio
                    // @ts-ignore
                    checked={selectedValue === 'no'}
                    onChange={handleChange}
                    value="no"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'no' }}
                />
                <FacetLabel text='No' />
            </div>
            <div>
                <IceRadio
                    // @ts-ignore
                    checked={selectedValue === 'yes'}
                    onChange={handleChange}
                    value="yes"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'yes' }}
                />
                <FacetLabel text='Yes' />
            </div>
        </StyledGrid>
    );
}