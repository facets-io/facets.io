import FacetButton from './FacetButton';
import FacetLink from './FacetLink';
import styled from 'styled-components';
import { color, fontSize } from '../constant';
import FacetLabel from './FacetLabel';

const MainDiv = styled.div`
    background-color: ${color.white};
    width: 100%;
    text-align: center;
`;

export default function Navbar() {
    return (
        <MainDiv>
            <FacetLabel color={color.black} fontSize={fontSize.xxLarge} text="Deploy Features Faster" />
            <br />
            <br />
        </MainDiv>
    );
}