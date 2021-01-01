
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Documentation from '../shared/components/Documentation'
import ContentContainer from '../shared/components/ContentContainer'
import Navbar from '../shared/components/Navbar'

export default function DocumentationPage() {
    return (
        <div>
            <Head>
                <title>Facet</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ContentContainer >
                <Navbar />
            </ContentContainer>
            <ContentContainer hasPadding={false}>
                <Documentation />
            </ContentContainer>
        </div>
    )
}
