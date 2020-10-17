import React from 'react';
import Docs from './docs/Docs'
import styled from 'styled-components';
import facetNinjaDLA from './images/facet-ninja-dla.jpg';

const StyledIframe = styled.iframe`
    margin-top: 1rem;
`;

const StyledImg = styled.img`
    margin-top: 1rem;
    width: 20%;
`

export default function () {
    return <div>
        <StyledImg src={facetNinjaDLA} />
        <Docs />
    </div>
}