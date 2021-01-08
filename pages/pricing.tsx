
import Head from 'next/head'
import ContentContainer from '../shared/components/ContentContainer'
import Navbar from '../shared/components/Navbar'
import styled from 'styled-components'
import Footer from '../shared/components/Footer'
import { color, fontSize } from '../shared/constant'
import FacetLabel from '../shared/components/FacetLabel'
import PricingTable from '../shared/components/PricingTable'
import PageContainer from '../shared/components/PageContainer'

const MainDiv = styled.div`
    background-color: ${color.darkGray};
    width: 100%;
    text-align: center;
`;

export default function PricingPage() {
    return (
        <PageContainer>
            <Head>
                <title>Facet</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ContentContainer>
                <Navbar />
            </ContentContainer>
            <ContentContainer hasPadding={false}>
                <MainDiv>
                    // TODO
                </MainDiv>
            </ContentContainer>
            <ContentContainer color={color.black}>
                <Footer />
            </ContentContainer>
        </PageContainer>
    )
}
