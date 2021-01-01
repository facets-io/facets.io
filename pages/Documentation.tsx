
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Documentation from '../shared/components/Documentation'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Facet</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Documentation />
        </div>
    )
}
