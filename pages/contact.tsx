import styled from 'styled-components'
import FacetInput from '../shared/components/FacetInput'
import FacetLabel from '../shared/components/FacetLabel'
import { color } from '../shared/constant'
import RadioButtons from '../shared/components/RadioButtons'
import ContentContainer from '../shared/components/ContentContainer'
import Head from 'next/head'
import Navbar from '../shared/components/Navbar'
import Footer from '../shared/components/Footer'
import ContactGrid from '../shared/components/ContactGrid'

const StyledDiv = styled.div`
    display: grid;
    background-color: ${color.darkBlue};
`

const TwoGrid = styled.div`
    display: grid;
    grid-template-columns: 40% 40%;
    grid-gap: 5%;
`;

export default function ContactPage() {
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
                <ContactGrid />
            </ContentContainer>
            <ContentContainer color={color.black}>
                <Footer />
            </ContentContainer>
        </div>
    )
}