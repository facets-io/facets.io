import styled from 'styled-components';
import FacetLink from '../components/FacetLink';
import { color } from '../constant';

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
    return (
        <MainDiv>
            <StyledGrid>
                <InnerDiv>
                    <div>
                        <img src="/mountainwalk.svg" alt="Facet logo" />
                    </div>
                </InnerDiv>
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
            </StyledGrid>
        </MainDiv>
    );
}

