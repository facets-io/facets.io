import { color, fontSize } from "../constant";
import FacetLabel from "./FacetLabel";
import styled from 'styled-components';
import MountainWalkWebsite from "./MountainWalkWebsite";
import FacetLink from "./FacetLink";
import FacetIconButton from "./FacetIconButton";

const StyledDiv = styled.div`
    text-align: normal;
    background-color: ${color.darkestGray};
    height: 100%;
`;

const InitialAlignDiv = styled.div`
    text-align: initial;
    padding: .5rem;
    margin-left: .8rem;
    display: grid;
    cursor: pointer;
    grid-template-columns: 80% 20%;
`;

export default function MockSidebar() {
    return (
        <>
            <StyledDiv>
                <InitialAlignDiv>
                    <div>
                        <FacetLabel color={color.grayB} text="Facet-1" />
                    </div>
                    <div>
                        <FacetIconButton name="eye-off-outline" component="span" />
                    </div>
                </InitialAlignDiv>
                <InitialAlignDiv>
                    <div>
                        <FacetLabel color={color.grayB} text="Facet-2" />
                    </div>
                    <div>
                        <FacetIconButton name="eye-off-outline" component="span" />
                    </div>
                </InitialAlignDiv>
                <InitialAlignDiv>
                    <div>
                        <FacetLabel color={color.grayB} text="Facet-3" />
                    </div>
                    <div>
                        <FacetIconButton name="eye-off-outline" component="span" />
                    </div>
                </InitialAlignDiv>
                <InitialAlignDiv>
                    <div>
                        <FacetLabel color={color.grayB} text="Facet-4" />
                    </div>
                    <div>
                        <FacetIconButton name="eye-off-outline" component="span" />
                    </div>
                </InitialAlignDiv>
            </StyledDiv>
        </>
    );
}