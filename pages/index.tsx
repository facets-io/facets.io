import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../shared/components/Navbar'
import Topbar from '../shared/components/Topbar'
import Secondary from '../shared/components/Secondary'
import Democratizing from '../shared/components/Democritizing'
import GetSocial from '../shared/components/GetSocial'
import FacetLabel from '../shared/components/FacetLabel'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Facet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <br />
      <Topbar />
      <Secondary />
      <Democratizing />
      <GetSocial />
      <br />
      <div>
        <img src="/facet_typography.svg" alt="Facet logo" />
      </div>
      <br />
      <div>
        <FacetLabel text="Copyright Facet Technologies Inc. 2021 - All rights reserved. Terms of Service & Privacy Policy" />
      </div>
      <br />
    </div>
  )
}
