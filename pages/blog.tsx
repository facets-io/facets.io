
import Head from 'next/head'
import ContentContainer from '../shared/components/ContentContainer'
import Navbar from '../shared/components/Navbar'
import BlogGrid from '../shared/components/BlogGrid'
import Footer from '../shared/components/Footer'
import { color } from '../shared/constant'
import styled from 'styled-components'
import PageContainer from '../shared/components/PageContainer'

export default function BlogPage() {
    return (
        <PageContainer>
            <Head>
                <title>Facet</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ContentContainer>
                <Navbar />
            </ContentContainer>
            <ContentContainer hasPadding={false}>
                <BlogGrid />
            </ContentContainer>
            <ContentContainer color={color.black}>
                <Footer />
            </ContentContainer>
        </PageContainer>
    )
}