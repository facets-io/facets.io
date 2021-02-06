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
import { inspect } from "util";
import styles from "../styles/Home.module.css";

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
            <div className={styles.container}>
                <FacetHead />
                <Border />
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