import { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../components/AppContext';
import FacetLink from '../components/FacetLink';
import { allFacets, color } from '../constant';

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: 40% 10% 10% 10% 10% 10%;
    column-gap: 2%;
    align-items: center;
`;

const InnerDiv = styled.div`
    display: grid;
    grid-template-columns: 3rem 3rem;
`;

const MainDiv = styled.div`
    width: 100%;
    grid-template-columns: 80% 10% 10%;
`;

export default function MountainWalkNavbar() {
    const { hiddenFacets, setHiddenFacets } = useContext(AppContext);

    return (
        <MainDiv>
            <StyledGrid>
                <InnerDiv>
                    <div>
                        {!hiddenFacets.includes(allFacets.facet1) ? <img src="/mountainwalk.svg" alt="Facet logo" /> : null}
                    </div>
                </InnerDiv>

                {!hiddenFacets.includes(allFacets.facet2) ? <>
                    <div>
                        <FacetLink color={color.black} text="Home" />
                    </div>
                    <div>
                        <FacetLink color={color.black} text="About" />
                    </div>
                    <div>
                        <FacetLink color={color.black} text="Blog" />
                    </div>
                    <div>
                        <FacetLink color={color.black} text="Contact" />
                    </div>
                </> : null}
            </StyledGrid>
        </MainDiv>
    );
}

