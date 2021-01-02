import { color, fontSize } from "../constant";
import FacetLabel from "./FacetLabel";
import styled from 'styled-components';

const StyledDiv = styled.div`
    text-align: center;
`;

export default function PreviewFacet() {
    return (
        <StyledDiv>
            <div>
                <FacetLabel color={color.black} fontSize={fontSize.xLarge} text="Create facets in seconds" />
            </div>
            <br />
            <div>
                <FacetLabel color={color.black} fontSize={fontSize.medium} text="Give it a spin!" />
            </div>
            <br />
            <div>
                // TODO
            </div>
        </StyledDiv>
    );
}