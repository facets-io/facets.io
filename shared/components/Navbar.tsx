import { useContext } from 'react'
import styled from 'styled-components';
import { color } from '../constant';
import FacetIconButton from './FacetIconButton';
import Link from 'next/link'
import FacetLabel from './FacetLabel';
import AppContext from './AppContext';
import { pages } from './AppContext'

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: 20% 10% 10% 10% 10% 10%;
    column-gap: 5%;
    align-items: center;
    justify-content: center;
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

const LabelContainer = styled.div`
    color: ${props => props.isActive ? color.electricA + '!important' : color.white};
    text-decoration: ${props => props.isActive ? 'underline' : ''};
    cursor: pointer;
`

export default function Navbar({ activePage = '' }) {
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
                <div>
                    <Link href="/pricing">
                        <LabelContainer isActive={pages.Pricing === activePage}>
                            <FacetLabel color={activePage === pages.Pricing ? color.electricB : color.white} text={pages.Pricing} />
                        </LabelContainer>
                    </Link>
                </div>
                <div>
                    <Link href="/documentation">
                        <LabelContainer isActive={pages.Documentation === activePage}>
                            <FacetLabel color={activePage === pages.Documentation ? color.electricB : color.white} text={pages.Documentation} />
                        </LabelContainer>
                    </Link>
                </div>
                <div>
                    <Link href="/blog">
                        <LabelContainer isActive={pages.Blog === activePage}>
                            <FacetLabel color={activePage === pages.Blog ? color.electricB : color.white} text={pages.Blog} />
                        </LabelContainer>
                    </Link>
                </div>
                <div>
                    <Link href="/contact">
                        <LabelContainer isActive={pages.Contact === activePage}>
                            <FacetLabel color={activePage === pages.Contact ? color.electricB : color.white} text="Contact" />
                        </LabelContainer>
                    </Link>
                </div>
                <div>
                    <Link href="https://github.com/facets-io">
                        <a target="_blank">
                            <div style={{ cursor: 'pointer' }}>
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