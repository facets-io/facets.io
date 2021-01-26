import Head from 'next/head'
import Documentation from '../shared/components/Documentation'
import ContentContainer from '../shared/components/ContentContainer'
import Navbar from '../shared/components/Navbar'
import styled from 'styled-components'
import TOC from '../shared/components/TOC'
import AppProvider from '../shared/components/AppProvider'
import {pages} from '../shared/components/AppContext'
import Footer from '../shared/components/Footer'
import {color, fontSize} from '../shared/constant'
import FacetHead from './FacetHead'
import styles from "../styles/Home.module.css";
import PricingHeader from "../shared/components/PricingHeader";
import FacetLabel from "../shared/components/FacetLabel";
import {Component, useEffect} from "react";

const TableDiv = styled.div`
     display: grid;
     grid-template-columns: 15% 76%;
`;

const MainDiv = styled.div`
     padding-left: 7.5rem;
`;

const StickyDiv = styled.div`
    position: fixed;
    top: 100px;

`;

const InnerStickyDiv = styled.div`
  
`

const Border = styled.div`
  background-color: ${color.primary};
  position:fixed;
  top:0px;
  width:100%;
  height: .275rem;
  z-index: 500;
`;

export default function DocumentationPage() {
    return (
        <AppProvider>
            <div className={styles.container}>
                <FacetHead />
                <Border/>
                <ContentContainer style={{position: "fixed", top: ".275rem", width: "100%", zIndex:500}} paddingTop={"1rem"} paddingBottom={".5rem"} color={color.white}>

                {/*<ContentContainer style={{position: "fixed", top: ".275rem", width: "100%", zIndex:500, backgroundColor: "var(--header-background)", backdropFilter: "saturate(20%) blur(2px)"}} paddingTop={"1rem"} paddingBottom={".5rem"} color={color.white}> */}
                    <Navbar activePage={pages.Documentation}/>
                </ContentContainer>
                <ContentContainer color={color.white} paddingTop={"6.5rem"}>
                   <MainDiv >
                    <TableDiv>
                        <StickyDiv>
                            <InnerStickyDiv />
                            <TOC />
                            <InnerStickyDiv/>
                        </StickyDiv>
                        <div></div>
                        <div>
                            <FacetLabel color={color.black} fontSize={"39px"} fontWeight={700} text="Documentation" />
                            <br />
                            <br />
                            <Documentation/>
                        </div>
                    </TableDiv>
                   </MainDiv>
                </ContentContainer>
                <ContentContainer color={color.secondaryGray}>
                    <Footer/>
                </ContentContainer>
            </div>
        </AppProvider>
    )
}
