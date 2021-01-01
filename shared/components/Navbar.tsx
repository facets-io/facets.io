import styled from 'styled-components';
import { color } from '../constant';
import FacetIconButton from './FacetIconButton';
import FacetLink from './FacetLink';

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: 40% 10% 10% 10% 10% 10%;
    column-gap: 2%;
    padding: 3rem;
    align-items: center;
`;

const InnerDiv = styled.div`
    display: grid;
    grid-template-columns: 3rem 3rem;
`;

const MainDiv = styled.div`
    background-color: ${color.facetBlack};
    width: 100%;
    grid-template-columns: 80% 10% 10%;
`;

export default function Navbar() {
    return (
        <MainDiv>
            <StyledGrid>
                <InnerDiv>
                    <div>
                        <img src="/facet_white.svg" alt="Facet logo" />
                    </div>
                    <div style={{ alignSelf: 'center' }}>
                        <img src="/facet_typography_white.svg" alt="Facet" />
                    </div>
                </InnerDiv>
                <div>
                    <FacetLink text="Pricing" />
                </div>
                <div>
                    <FacetLink text="Documentation" />
                </div>
                <div>
                    <FacetLink text="Blog" />
                </div>
                <div>
                    <FacetLink text="Contact" />
                </div>
                <div>
                    <FacetIconButton title="github" onClick={() => { }} name="github" size="large" />
                </div>
            </StyledGrid>
        </MainDiv>
    );
}