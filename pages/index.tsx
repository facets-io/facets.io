import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../shared/components/Navbar'
import Topbar from '../shared/components/Topbar'
import Secondary from '../shared/components/Secondary'
import Democratizing from '../shared/components/Democritizing'
import Footer from '../shared/components/Footer'
import ContentContainer from '../shared/components/ContentContainer'
import { color } from '../shared/constant'
import AppProvider from '../shared/components/AppProvider'
import FacetHead from './FacetHead'
import { pages } from "../shared/components/AppContext";
import TopBorder from '../shared/components/TopBorder'

export default function Home() {
  return (
    <AppProvider>
      <div>
        <FacetHead />
        <TopBorder />
        <ContentContainer isNavBar color={color.white}>
          <Navbar activePage={pages.Home} />
        </ContentContainer>
        <ContentContainer color={color.white} paddingTop={"9rem"}>
          <Topbar />
        </ContentContainer>
        <ContentContainer color={color.secondaryGray}>
          <Secondary />
        </ContentContainer>
        {/* <ContentContainer color={color.white}>
          <Democratizing />
        </ContentContainer> */}
        {/* <ContentContainer color={color.secondaryGray}>
          <Footer />
        </ContentContainer> */}
      </div>
    </AppProvider>
  )
}
