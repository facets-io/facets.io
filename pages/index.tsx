import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../shared/components/Navbar'
import Topbar from '../shared/components/Topbar'
import Secondary from '../shared/components/Secondary'
import Democratizing from '../shared/components/Democritizing'
import GetSocial from '../shared/components/GetSocial'
import Footer from '../shared/components/Footer'
import ContentContainer from '../shared/components/ContentContainer'

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
      <ContentContainer>
        <Secondary />
      </ContentContainer>
      <ContentContainer>
        <Democratizing />
      </ContentContainer>
      <ContentContainer>
        <GetSocial />
      </ContentContainer>
      <Footer />
    </div>
  )
}
