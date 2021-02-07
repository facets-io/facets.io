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
import styles from "../styles/Home.module.css";
import TopBorder from '../shared/components/TopBorder'

export default function ContactPage() {
    return (
        <AppProvider>
            <div className={styles.container}>
                <FacetHead />
                <TopBorder />
                <ContentContainer isNavBar>
                    <Navbar activePage={pages.Contact} />
                </ContentContainer>
                <ContentContainer color={color.white} paddingTop={"9rem"}>
                    <ContactGrid />
                </ContentContainer>
                <ContentContainer color={color.secondaryGray}>
                    <Footer />
                </ContentContainer>
            </div>
        </AppProvider>
    )
}