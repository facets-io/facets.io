import FacetLabel from "./FacetLabel";
import styled from 'styled-components';
import { color, fontSize } from "../constant";

const MainDiv = styled.div`
    background-color: ${color.facetBlack};
    width: 100%;
    text-align: center;
`;

export default function Democratizing() {
    return (
        <MainDiv>
            <div>
                <FacetLabel fontSize={fontSize.xxLarge} text="Democratizing feature life cycle" />
            </div>
            <div>
                <FacetLabel text="Give it a spin!" />
            </div>
            <div>
                // TODO preview component
            </div>
        </MainDiv>
    );
}