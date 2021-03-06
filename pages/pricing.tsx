import { useEffect, useContext } from 'react'
import Head from 'next/head'
import ContentContainer from '../shared/components/ContentContainer'
import Navbar from '../shared/components/Navbar'
import styled from 'styled-components'
import Footer from '../shared/components/Footer'
import { color } from '../shared/constant'
import PageContainer from '../shared/components/PageContainer'
import AppProvider from '../shared/components/AppProvider'
import AppContext, { pages } from '../shared/components/AppContext'
import FacetLabel from '../shared/components/FacetLabel'
import PricingHeader from '../shared/components/PricingHeader'
import FacetHead from './FacetHead'
import styles from "../styles/Home.module.css";
import TopBorder from '../shared/components/TopBorder'

const MainDiv = styled.div`
    background-color: ${color.white};
    width: 100%;
    text-align: center;
`;

export default function PricingPage() {
    return (
        <AppProvider>
            <div className={styles.container} style={{ position: "relative" }}>
                <FacetHead />
                <TopBorder />
                <ContentContainer isNavBar>
                    <Navbar activePage={pages.Pricing} />
                </ContentContainer>
                <ContentContainer color={color.white} paddingTop={"9rem"}>
                    <MainDiv>
                        <PricingHeader />
                    </MainDiv>
                </ContentContainer>
                <ContentContainer color={color.secondaryGray}>
                    <br />
                    <Footer />
                </ContentContainer>
            </div>
        </AppProvider>
    )
}
