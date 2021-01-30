import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
    font-family: Helvetica;
    font-size: 27px;
    font-weight: 600;
`;

export default ({ text, ...props }) => {
    return <StyledH1 {...props}>
        {text}
    </StyledH1 >
}