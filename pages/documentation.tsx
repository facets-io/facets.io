import ContentContainer from '../shared/components/ContentContainer'
import Navbar from '../shared/components/Navbar'
import styled from 'styled-components'
import AppProvider from '../shared/components/AppProvider'
import { pages } from '../shared/components/AppContext'
import Footer from '../shared/components/Footer'
import { color } from '../shared/constant'
import FacetHead from './FacetHead'
import styles from "../styles/Home.module.css";
import TopBorder from '../shared/components/TopBorder'
import DocumentationSelection from '../shared/components/DocumentationSelection'

const MainDiv = styled.div`
     padding-left: 7.5rem;
     @media (max-width: 720px) {
        padding-left: 0;
    }
`;

const PaddingDiv = styled.div`
    padding-bottom: 22rem;
`

export default function DocumentationPage() {

    return (
        <AppProvider>
            <div className={styles.container}>
                <FacetHead />
                <TopBorder />
                <ContentContainer isNavBar>
                    <Navbar activePage={pages.Documentation} />
                </ContentContainer>
                <PaddingDiv>
                    <ContentContainer color={color.white} paddingTop={"6.5rem"}>
                        <MainDiv >
                            <DocumentationSelection />
                        </MainDiv>
                        <br />
                        <br />
                    </ContentContainer>
                </PaddingDiv>
                <ContentContainer isFooter color={color.secondaryGray}>
                    <Footer />
                </ContentContainer>
            </div>
        </AppProvider>
    )
}
