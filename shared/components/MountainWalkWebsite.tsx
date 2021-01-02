import { color, fontSize } from "../constant";
import MountainWalkNavbar from "../MountainWalkWebsite/MountainWalkNavbar";
import FacetLabel from "./FacetLabel";
import styled from 'styled-components';
import MockSidebar from './MockSidebar';

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25%;
    column-gap: 3%;
    align-items: center;
    margin-right: 2rem;
    margin-left: 2rem;
    justify-content: center;
`;

const MainDiv = styled.div`
    display: grid;
    grid-template-columns: 20% 80%;
`;

export default function MountainWalkWebsite() {
    return (
        <>
            <MainDiv>
                <div style={{ backgroundColor: color.grayA }}>
                    <img src="/facet_typography.svg" alt="Facet logo" />
                </div>
                <div style={{ backgroundColor: color.darkGray }}>
                </div>
            </MainDiv>
            <MainDiv>
                <div>
                    <MockSidebar />
                </div>
                <div style={{ backgroundColor: color.white, padding: '1rem' }}>
                    <MountainWalkNavbar />
                    <br />
                    <FacetLabel fontSize={fontSize.xLarge} color={color.black} text="Get ready for an adventure" />
                    <br />
                    <br />
                    <StyledDiv>
                        <div>
                            <img style={{ width: '100%' }} src="/Group_48.svg" alt="Facet logo" />
                        </div>
                        <div>
                            <img style={{ width: '100%' }} src="/unsplash_Josh_Earl.svg" alt="Facet logo" />
                        </div>
                        <div>
                            <img style={{ width: '100%' }} src="/Aerial_Sunset_Vancouver.svg" alt="Facet logo" />
                        </div>
                    </StyledDiv>
                    <br />
                    <br />
                </div>
            </MainDiv>
        </>
    );
}