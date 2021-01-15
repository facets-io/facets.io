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

export default function ContactPage() {
    return (
        <AppProvider>
            <PageContainer>
                <FacetHead />
                <ContentContainer>
                    <Navbar activePage={pages.Contact} />
                </ContentContainer>
                <ContentContainer hasPadding={false}>
                    <ContactGrid />
                </ContentContainer>
                <ContentContainer color={color.white}>
                    <Footer />
                </ContentContainer>
            </PageContainer>
        </AppProvider>
    )
}