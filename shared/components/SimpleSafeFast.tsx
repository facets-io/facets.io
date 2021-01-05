import FacetLabel from "./FacetLabel";
import styled from 'styled-components';
import { color, fontSize } from "../constant";

const MainDiv = styled.div`
    background-color: ${color.darkGray};
    width: 100%;
    text-align: center;
`;

export default function SimpleSafeFast() {
    return (
        <MainDiv>
            <div>
                <FacetLabel color={color.white} fontSize={fontSize.xxLarge} text="Simple, Safe, and fast feature rollout with Facets" />
            </div>
            <div>
                <FacetLabel text="Use Facets to save countless lines of code and resources" />
            </div>
            <div>
                // TODO add Gif
            </div>
        </MainDiv>
    );
}