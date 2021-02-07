import styled from 'styled-components';
import { color, isMobile } from '../constant';
import Link from 'next/link'
import FacetLabel from './FacetLabel';
import { pages } from './AppContext'
import FacetButton, { primaryBtnColor } from "./FacetButton";
import useMedia from '../hooks/useMedia';

const LogoDiv = styled.div`
    display: grid;
    grid-template-columns: 4rem 3rem;
    cursor: pointer;
    align-items: center;
`;

const LeftDiv = styled.div`
    display: grid;
    grid-template-columns: 100%;
    align-items: center;
    justify-content: left;
`;

const RightDiv = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: 1.5rem;
  padding: 0 60px;
`;

const InnerDiv = styled.div`
    display: grid;
    grid-template-columns: 52.4% 52.4%;
    align-items: center;
    justify-content: left;
`;

const OuterDiv = styled.div`
    display: grid;
    grid-template-columns: 85%; 
    justify-content: center;
`;

const LabelContainer = styled.div`
    cursor: pointer;
`

export default function Navbar({ activePage = '' }) {
    const media = useMedia();
    const isViewMobile = isMobile(media);

    const NavLabel = ({ text }) => <FacetLabel fontFamily="Roboto" fontWeight={activePage === text ? 500 : 300} fontSize="16px" color={activePage === text ? color.primary : color.black} text={text} />;

    return (
        <OuterDiv>
            <InnerDiv>
                <LeftDiv>
                    <Link href="/">
                        <LogoDiv>
                            <img src="/facet_primary.svg" alt="Facet logo" />
                            <img src="/facet_typography_black.svg" alt="Facet" />
                        </LogoDiv>
                    </Link>
                </LeftDiv>
                <RightDiv>
                    <Link href="/">
                        <LabelContainer>
                            <NavLabel text={pages.Home} />
                        </LabelContainer>
                    </Link>
                    <Link href="/pricing">
                        <LabelContainer>
                            <NavLabel text={pages.Pricing} />
                        </LabelContainer>
                    </Link>
                    <Link href="/documentation">
                        <LabelContainer>
                            <NavLabel text={pages.Documentation} />
                        </LabelContainer>
                    </Link>
                    <Link href="/blog">
                        <LabelContainer>
                            <NavLabel text={pages.Blog} />
                        </LabelContainer>
                    </Link>
                    <Link href="/contact">
                        <LabelContainer>
                            <NavLabel text={pages.Contact} />
                        </LabelContainer>
                    </Link>
                    <Link href="https:github.com/facets-io">
                        <div style={{ cursor: 'pointer' }}>
                            <FacetLabel fontFamily="Roboto" fontWeight={300} fontSize={"16px"} color={color.black} text='GitHub' />
                        </div>
                    </Link>
                    <FacetButton
                        onAuxClick={() => { window.open("https://chrome.google.com/webstore/detail/facetninja/hpkpjkdhgldjhcopdkmljdgceeojoglh", "_blank") }}
                        colorButtonStyle={primaryBtnColor} text="Download" onClick={() => { location.href = 'https://chrome.google.com/webstore/detail/facetninja/hpkpjkdhgldjhcopdkmljdgceeojoglh' }} />
                </RightDiv>
            </InnerDiv>
        </OuterDiv>
    );
}