import { useContext } from 'react';
import { allFacets, color, fontSize } from "../constant";
import MountainWalkNavbar from "../MountainWalkWebsite/MountainWalkNavbar";
import FacetLabel from "./FacetLabel";
import styled from 'styled-components';
import MockSidebar from './MockSidebar';
import AppContext from './AppContext';
import MountainWalkSearchBar from './MountainWalkSearchbar';

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

    const { hiddenFacets, setHiddenFacets } = useContext(AppContext);

    return (
        <>
            <MainDiv>
                <div style={{ backgroundColor: color.grayA }}>
                    <img src="/facet_dark_logo.svg" alt="Facet logo" />
                </div>
                <div style={{ backgroundColor: color.darkGray }} />
            </MainDiv>
            <MainDiv>
                <div>
                    <MockSidebar />
                </div>
                <div style={{
                    backgroundColor: color.white,
                    padding: '1rem'
                }}>
                    <MountainWalkNavbar />
                    <br />
                    {!hiddenFacets.includes(allFacets.facet3) ? <FacetLabel fontSize={fontSize.xLarge} color={color.black} text="Get ready for an adventure" /> : null}
                    <br />
                    <br />
                    {!hiddenFacets.includes(allFacets.facet4) ? <MountainWalkSearchBar /> : null}
                    <br />
                    {!hiddenFacets.includes(allFacets.facet5) ?
                        <>
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
                        </> : null
                    }
                    <br />
                    <br />
                </div>
            </MainDiv>
        </>
    );
}