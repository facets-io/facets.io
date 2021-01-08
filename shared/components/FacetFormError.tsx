import React from 'react';
import styled from 'styled-components';
import FacetImage from './FacetImage';

const StyledDiv = styled.div`
    textAlign: 'center'
`;

const ErrorSpan = styled.span`
    color: #FF5050;
`;

export default ({ text, ...other }) => {
    return <StyledDiv>
        <FacetImage src='./facet_form_error.svg' />
        <ErrorSpan {...other}>{text}</ErrorSpan>
    </StyledDiv>
}
