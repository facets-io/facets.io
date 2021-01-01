import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../shared/components/Navbar'
import Topbar from '../shared/components/Topbar'
import Secondary from '../shared/components/Secondary'
import Democratizing from '../shared/components/Democritizing'
import GetSocial from '../shared/components/GetSocial'
import FacetLabel from '../shared/components/FacetLabel'
import Footer from '../shared/components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Facet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Topbar />
      <Secondary />
      <Democratizing />
      <GetSocial />
      <Footer />
    </div>
  )
}
