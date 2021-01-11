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

const MainDiv = styled.div`
    background-color: ${color.darkGray};
    width: 100%;
    text-align: center;
`;

export default function PricingPage() {
    return (
        <AppProvider>
            <PageContainer>
                <Head>
                    <title>Facet</title>
                    <link rel="icon" href="/favicon.ico" />
                    <script src="https://api.facet.ninja/facet.ninja.js?id=DOMAIN~ZTM5OTEwOTYtNzM2Mi00OWZmLWJmOWUtNjQ4MjE5NjFhYTEx"></script>
                </Head>
                <ContentContainer>
                    <Navbar activePage={pages.Pricing} />
                </ContentContainer>
                <ContentContainer hasPadding>
                    <MainDiv>
                        <FacetLabel text="Work in Progress 🚧" />
                    </MainDiv>
                </ContentContainer>
                <ContentContainer color={color.black}>
                    <Footer />
                </ContentContainer>
            </PageContainer>
        </AppProvider>
    )
}
