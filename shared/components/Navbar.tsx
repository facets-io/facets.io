import styled from 'styled-components';
import { color } from '../constant';
import FacetIconButton from './FacetIconButton';
import Link from 'next/link'
import FacetLabel from './FacetLabel';

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: 20% 10% 10% 10% 10% 10%;
    column-gap: 5%;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    justify-items: center;
`;

const InnerDiv = styled.div`
    display: grid;
    grid-template-columns: 3rem 3rem;
`;

const MainDiv = styled.div`
    background-color: ${color.darkGray};
    width: 100%;
    grid-template-columns: 80% 10% 10%;
`;

const HoverableDiv = styled.div`
    cursor: pointer;
`;

export default function Navbar() {
    return (
        <MainDiv>
            <StyledGrid>
                <Link href="/">
                    <InnerDiv>
                        <div>
                            <img src="/facet_white.svg" alt="Facet logo" />
                        </div>
                        <div style={{ alignSelf: 'center' }}>
                            <img src="/facet_typography_white.svg" alt="Facet" />
                        </div>
                    </InnerDiv>
                </Link>
                <HoverableDiv>
                    <Link href="/pricing">
                        <div>
                            <FacetLabel color={color.white} text="Pricing" />
                        </div>
                    </Link>
                </HoverableDiv>
                <HoverableDiv>
                    <Link href="/documentation">
                        <div>
                            <FacetLabel color={color.white} text="Documentation" />
                        </div>
                    </Link>
                </HoverableDiv>
                <div>
                    <Link href="/blog">
                        <div>
                            <FacetLabel color={color.white} text="Blog" />
                        </div>
                    </Link>
                </div>
                <div>
                    <Link href="/contact">
                        <div>
                            <FacetLabel color={color.white} text="Contact" />
                        </div>
                    </Link>
                </div>
                <div>
                    <Link href="https://github.com/facets-io">
                        <a target="_blank">
                            <div>
                                {/* @ts-ignore */}
                                <FacetIconButton isSelected={false} title="github" onClick={() => { }} name="github" size="large" />
                            </div>
                        </a>
                    </Link>
                </div>
            </StyledGrid>
        </MainDiv>
    );
}