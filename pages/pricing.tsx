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

const MainDiv = styled.div`
    background-color: ${color.darkGray};
    width: 100%;
    text-align: center;
`;

export default function PricingPage() {
    return (
        <AppProvider>
            <PageContainer>
                <FacetHead />
                <ContentContainer>
                    <Navbar activePage={pages.Pricing} />
                </ContentContainer>
                <ContentContainer>
                    <MainDiv>g
                        <PricingHeader />
                    </MainDiv>
                </ContentContainer>
                <ContentContainer color={color.black}>
                    <br />
                    <Footer />
                </ContentContainer>
            </PageContainer>
        </AppProvider>
    )
}
