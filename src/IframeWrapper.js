import React from 'react';
import Docs from './docs/Docs'
import styled from 'styled-components';
import facetNinjaDLA from './images/fn-dla.png';
import redditLive from './images/reddit-live.jpg';

const StyledImg = styled.img`
    margin-top: 1rem;
    width: 70%;
`

const TopImgDiv = styled.div`
    display: grid;
    grid-template-columns: 55% 45%;
    justify-items: center;
    align-items: center;
    margin-bottom: 2rem;
`;

export default function () {
    return <div>
        <TopImgDiv>
            <div><a href='https://facet.ninja/'><StyledImg src={facetNinjaDLA} /></a></div>
            <div><a><StyledImg src={redditLive} /></a></div>
        </TopImgDiv>
        <Docs />
    </div>
}