import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../shared/components/Navbar'
import Topbar from '../shared/components/Topbar'
import Secondary from '../shared/components/Secondary'
import Democratizing from '../shared/components/Democritizing'
import Footer from '../shared/components/Footer'
import ContentContainer from '../shared/components/ContentContainer'
import { color } from '../shared/constant'
import SimpleSafeFast from '../shared/components/SimpleSafeFast'
import AppProvider from '../shared/components/AppProvider'
import StayUpdated from '../shared/components/StayUpdated'
import FacetHead from './FacetHead'
import styled from 'styled-components';

const Border = styled.div`
  background-color: ${color.primary};
  position:fixed;
  top:0;
  width:100%;
  height: .275rem;
  z-index: 500;
`;

export default function Home() {
  return (
    <AppProvider>
      <div className={styles.container}>
        <FacetHead />
        <Border />
        <ContentContainer style={{position: "fixed",top: ".275rem", width: "100%", zIndex: 500}} paddingTop={"1rem"}  paddingBottom={".5rem"}color={color.white}>
          <Navbar />
        </ContentContainer>

        <ContentContainer color={color.white} paddingTop={"9rem"}>
          <Topbar />
        </ContentContainer>
        <ContentContainer color={color.secondaryGray}>
          <Secondary />
        </ContentContainer>
        <ContentContainer  color={color.white}>
          <Democratizing />
        </ContentContainer>
        <ContentContainer color={color.secondaryGray}>
          <Footer />
        </ContentContainer>
      </div>
    </AppProvider>
  )
}
