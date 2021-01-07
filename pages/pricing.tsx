
import Head from 'next/head'
import ContentContainer from '../shared/components/ContentContainer'
import Navbar from '../shared/components/Navbar'
import styled from 'styled-components'
import Footer from '../shared/components/Footer'
import { color } from '../shared/constant'

const StyledDiv = styled.div`
    display: grid;
    text-align: center;
`

const PageContainer = styled.div`
    display: grid;
    height: 100%;
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
                <StyledDiv>
                    <h3 style={{ color: 'white' }}>Thanks for checking us out! We are actively implementing our pricing. <br />🚧 Coming soon!</h3>
                    <h3 style={{ color: 'white' }}> </h3>
                </StyledDiv>
            </ContentContainer>
            <ContentContainer color={color.black}>
                <Footer />
            </ContentContainer>
        </PageContainer>
    )
}
