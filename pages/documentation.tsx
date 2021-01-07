
import Head from 'next/head'
import Documentation from '../shared/components/Documentation'
import ContentContainer from '../shared/components/ContentContainer'
import Navbar from '../shared/components/Navbar'
import styled from 'styled-components'
import TOC from '../shared/components/TOC'

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: 20% 80%;
    margin-left: 2rem;
    margin-right: 2rem;
`;

const StickyDiv = styled.div`
    position: sticky;
    top: 0px;
`

const InnerStickyDiv = styled.div`
    position: sticky;
    top: 0px;
`

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
                <StyledDiv>
                    <StickyDiv>
                        <InnerStickyDiv />
                        <TOC />
                        <InnerStickyDiv />
                    </StickyDiv>
                    <div>
                        <Documentation />
                    </div>
                </StyledDiv>
            </ContentContainer>
        </div>
    )
}
