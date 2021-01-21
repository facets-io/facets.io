
import Head from 'next/head'
import Documentation from '../shared/components/Documentation'
import ContentContainer from '../shared/components/ContentContainer'
import Navbar from '../shared/components/Navbar'
import styled from 'styled-components'
import TOC from '../shared/components/TOC'
import AppProvider from '../shared/components/AppProvider'
import { pages } from '../shared/components/AppContext'
import Footer from '../shared/components/Footer'
import { color } from '../shared/constant'
import FacetHead from './FacetHead'

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
        <AppProvider>
            <div>
                <FacetHead />
                <ContentContainer >
                    <Navbar activePage={pages.Documentation} />
                </ContentContainer>
                <ContentContainer>
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
                <ContentContainer color={color.black}>
                    <Footer />
                </ContentContainer>
            </div>
        </AppProvider>
    )
}
