import FacetButton from "./FacetButton";
import FacetInput from "./FacetInput";
import styled from 'styled-components';
import { color } from "../constant";

const MainDiv = styled.div`
    background-color: ${color.facetBlack};
    width: 100%;
    text-align: center;
`;

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: 40% 40%;
    grid-gap: 5%;
    justify-content: center;

`;

export default function GetSocial() {
    return (
        <MainDiv>
            <div>
                <FacetButton style={{ width: '25rem' }} text="Download Our Chrome Extension" />
            </div>
            <br />
            <StyledDiv>
                <div>
                    <FacetInput placeholder="email address" />
                </div>
                <div>
                    <FacetButton text="STAY UPDATED" />
                </div>
            </StyledDiv>
        </MainDiv>
    );
}