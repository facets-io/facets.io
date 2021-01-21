import styled from 'styled-components';
import {color, fontSize} from '../constant';
import Link from 'next/link'
import FacetLabel from './FacetLabel';
import {pages} from './AppContext'
import FacetButton, {primaryBtnColor} from "./FacetButton";

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
    background-color: ${color.white};
    display: grid;
    grid-template-columns: 85%; 
    justify-content: center;
`;

const LabelContainer = styled.div`
    cursor: pointer;
`


export default function Navbar({activePage = ''}) {
    return (
        <OuterDiv>
            <InnerDiv>
                <LeftDiv>
                    <Link href="/">
                        <LogoDiv>
                            <img src="/facet_primary.svg" alt="Facet logo"/>
                            <img src="/facet_typography_black.svg" alt="Facet"/>
                        </LogoDiv>
                    </Link>
                </LeftDiv>
                <RightDiv>
                    <Link href="/pricing">
                        <LabelContainer isActive={pages.Pricing === activePage}>
                            <FacetLabel fontFamily="Roboto" fontSize={"16"} color={color.black} text={pages.Pricing}/>
                        </LabelContainer>
                    </Link>
                    <Link href="/documentation">
                        <LabelContainer isActive={pages.Documentation === activePage}>
                            <FacetLabel fontFamily="Roboto" fontSize={"16"} color={color.black} text={pages.Documentation}/>
                        </LabelContainer>
                    </Link>
                    <Link href="/blog">
                        <LabelContainer isActive={pages.Blog === activePage}>
                            <FacetLabel fontFamily="Roboto" fontSize={"16"} color={color.black} text={pages.Blog}/>
                        </LabelContainer>
                    </Link>
                    <Link href="/contact">
                        <LabelContainer isActive={pages.Contact === activePage}>
                            <FacetLabel fontFamily="Roboto" fontSize={"16"} color={color.black} text="Contact"/>
                        </LabelContainer>
                    </Link>
                    <Link href="https:github.com/facets-io">
                        <a target="_blank">
                            <div style={{cursor: 'pointer'}}>
                                <FacetLabel fontFamily="Roboto" fontSize={"16"} color={color.black} text='GitHub'/>
                            </div>
                        </a>
                    </Link>
                    <FacetButton colorButtonStyle={primaryBtnColor} text="Download" onClick={() => {}}/>
                </RightDiv>
            </InnerDiv>
        </OuterDiv>
    );
}