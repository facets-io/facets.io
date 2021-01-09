import FacetButton from './FacetButton';
import FacetLink from './FacetLink';
import styled from 'styled-components';
import { color, fontSize } from '../constant';
import FacetLabel from './FacetLabel';

const MainDiv = styled.div`
    background-color: ${color.darkGray};
    width: 100%;
    text-align: center;
`;

export default function Navbar() {
    return (
        <MainDiv>
            <FacetLabel color={color.white} fontSize={fontSize.xxLarge} text="Deploy Features Faster" />
            <br />
            <br />
            <FacetLabel color={color.white} fontSize={fontSize.medium} text="Manage feature rollouts" />
            <i>
                <FacetLabel color={color.facetBlue} fontSize={fontSize.medium} text=" without code " />
            </i>
            <FacetLabel color={color.white} fontSize={fontSize.medium} text="and improve your team's productivity" />
            <br />
            <br />
            <div>
                <FacetButton style={{ width: '30%' }} text="Download Our Chrome Extension" onClick={() => { }} />
                <br />
                {/* @ts-ignore */}
                <FacetLink fontSize={fontSize.large} color={color.ice} variant="contained" type="submit" text="Demo" onClick={() => { }} />
            </div>
        </MainDiv>
    );
}