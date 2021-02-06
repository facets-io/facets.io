import { useEffect } from 'react';
import styled from 'styled-components';
import { responsiveThresholds } from '../constant';
import useMedia from '../hooks/useMedia';

const InnerDiv = styled.div`
    display: grid;
    grid-gap: 5%;
    grid-template-columns: 40% 40%;
    text-align: initial;
    justify-content: center;
    margin-top: 2rem;

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: 100%;
    }
`;


export default ({ children = null }) => {
    const column = useMedia();

    return <InnerDiv order>
        {children}
    </InnerDiv>
}