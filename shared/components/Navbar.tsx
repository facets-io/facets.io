import styled from 'styled-components';
import FacetButton from './FacetButton';
import FacetIconButton from './FacetIconButton';
import FacetLink from './FacetLink';

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: 40% 10% 10% 10% 10% 10%;
    column-gap: 2%;
`;

const InnerDiv = styled.div`
    display: grid;
    grid-template-columns: 3rem 3rem;
`;

export default function Navbar() {
    return (
        <div style={{ width: '100%' }}>
            <StyledGrid>
                <InnerDiv>
                    <div>
                        <img src="/facet_main_logo.svg" alt="Facet logo" />
                    </div>
                    <div style={{ alignSelf: 'center' }}>
                        <img src="/facet_typography.svg" alt="Facet" />
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
        </div>
    );
}