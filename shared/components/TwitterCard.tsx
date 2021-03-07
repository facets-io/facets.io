import React from 'react';
import styled from 'styled-components';
import { color } from '../constant';

const GridCard = styled.div`
    display: flex;
    grid-template-columns: 18% 80%;
    gap: 2%;
    box-shadow: 0px 11.4128px 35.1163px rgb(0 0 0 / 30%);
    border-radius: 7px;
    padding: 16px;
`;

const StyledImg = styled.img`
    border-radius: 50%;
    width: 32px;
    height: 32px;
    margin-right: 16px;
`

const StyledA = styled.a`
    text-decoration: none;
    color: black;
`

const StyledP = styled.p`
    margin: 0;
`

const TwitterCard = ({ name, aHref, info, imgSrc, children }) => {
    return <StyledA href={aHref} target='_blank'>
        <GridCard>
            <div>
                <StyledImg src={imgSrc} />
            </div>
            <div className="content">
                <StyledP style={{ color: color.grayA }}>{name}<span>{info}</span></StyledP>
                {children}
            </div>
        </GridCard>
    </StyledA>
}


export default TwitterCard;