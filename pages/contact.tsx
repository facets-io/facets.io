import styled from 'styled-components'
import { color } from '../shared/constant'
import ContentContainer from '../shared/components/ContentContainer'
import Head from 'next/head'
import Navbar from '../shared/components/Navbar'
import Footer from '../shared/components/Footer'
import ContactGrid from '../shared/components/ContactGrid'
import AppProvider from '../shared/components/AppProvider'
import { pages } from '../shared/components/AppContext'
import FacetHead from './FacetHead'

const PageContainer = styled.div`
    display: grid;
    height: 100%;
`

const Border = styled.div`
  background-color: ${color.primary};
  position:sticky;
  top:0;
  width:100%;
  height: .275rem;
  z-index: 500;
`;


export default function ContactPage() {
    return (
        <AppProvider>

                <FacetHead />
                <Border />
                <ContentContainer style={{position: "fixed",top: ".275rem", width: "100%", zIndex: 500}} paddingTop={"1rem"}  paddingBottom={".5rem"} color={color.white}>
                    <Navbar activePage={pages.Contact} />
                </ContentContainer>
                <ContentContainer color={color.white} paddingTop={"9rem"}>
                    <ContactGrid />
                </ContentContainer>
                <ContentContainer color={color.secondaryGray}>
                    <Footer />
                </ContentContainer>

        </AppProvider>
    )
}