
import Head from 'next/head'
import Documentation from '../shared/components/Documentation'
import ContentContainer from '../shared/components/ContentContainer'
import Navbar from '../shared/components/Navbar'
import styled from 'styled-components'
import TOC from '../shared/components/TOC'
import { color } from '../shared/constant'

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: 20% 80%;
    margin-left: 2rem;
    margin-right: 2rem;
`;

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
                    <div>
                        <div style={{ width: '20%', borderTop: `2px solid ${color.electricB}` }} />
                        <TOC />
                        <div style={{ width: '20%', borderTop: `2px solid ${color.electricB}` }} />
                    </div>
                    <div>
                        <Documentation />
                    </div>
                </StyledDiv>
            </ContentContainer>
        </div>
    )
}
