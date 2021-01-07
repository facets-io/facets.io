
import Head from 'next/head'
import Documentation from '../shared/components/Documentation'
import ContentContainer from '../shared/components/ContentContainer'
import Navbar from '../shared/components/Navbar'
import styled from 'styled-components'
import TOC from '../shared/components/TOC'
import BlogGrid from '../shared/components/BlogGrid'
import Footer from '../shared/components/Footer'
import { color } from '../shared/constant'

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: 20% 80%;
    margin-left: 2rem;
    margin-right: 2rem;
`;

const StyledDiv2 = styled.div`
    display: grid;
    text-align: center;
`

export default function PricingPage() {
    return (
        <div>
            <Head>
                <title>Facet</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ContentContainer>
                <Navbar />
            </ContentContainer>
            <ContentContainer hasPadding={false}>
                <StyledDiv2>
                    <h3 style={{ color: 'white' }}>Thanks for checking us out! We are actively implementing our pricing. <br />🚧 Coming soon!</h3>
                    <h3 style={{ color: 'white' }}> </h3>
                </StyledDiv2>
            </ContentContainer>
            <ContentContainer color={color.black}>
                <Footer />
            </ContentContainer>
        </div>
    )
}
