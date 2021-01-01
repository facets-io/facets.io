import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../shared/components/Navbar'
import Topbar from '../shared/components/Topbar'
import Secondary from '../shared/components/Secondary'
import Democratizing from '../shared/components/Democritizing'
import GetSocial from '../shared/components/GetSocial'
import Footer from '../shared/components/Footer'
import ContentContainer from '../shared/components/ContentContainer'
import { color } from '../shared/constant'
import PreviewFacet from '../shared/components/PreviewFacet'
import SimpleSafeFast from '../shared/components/SimpleSafeFast'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Facet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentContainer >
        <Navbar />
      </ContentContainer>
      <ContentContainer>
        <Topbar />
      </ContentContainer>
      <ContentContainer color={color.ice}>
        <Secondary />
      </ContentContainer>
      <ContentContainer>
        <SimpleSafeFast />
      </ContentContainer>
      <ContentContainer>
        <Democratizing />
      </ContentContainer>
      <ContentContainer>
        <PreviewFacet />
      </ContentContainer>
      <ContentContainer>
        <GetSocial />
      </ContentContainer>
      <ContentContainer color={color.black}>
        <Footer />
      </ContentContainer>
    </div>
  )
}
