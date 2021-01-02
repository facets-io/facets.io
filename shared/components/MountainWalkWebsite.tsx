import { color } from "../constant";
import MountainWalkNavbar from "../MountainWalkWebsite/MountainWalkNavbar";
import FacetLabel from "./FacetLabel";
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25%;
    column-gap: 3%;
    align-items: center;
    margin-right: 2rem;
    margin-left: 2rem;
`;

const MainDiv = styled.div`
    border-style: solid;
    border-width: 3px;
    border-color: red;
`;

export default function MountainWalkWebsite() {
    return (
        <MainDiv>
            <MountainWalkNavbar />
            <br />
            <FacetLabel color={color.black} text="Get ready for an adventure" />
            <br />
            <StyledDiv>
                <div>
                    <img src="/Group_48.svg" alt="Facet logo" />
                </div>
                <div>
                    <img src="/unsplash_Josh_Earl.svg" alt="Facet logo" />
                </div>
                <div>
                    <img src="/Aerial_Sunset_Vancouver.svg" alt="Facet logo" />
                </div>
            </StyledDiv>
        </MainDiv>
    );
}