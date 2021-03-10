import Documentation from '../shared/components/Documentation'
import ContentContainer from '../shared/components/ContentContainer'
import Navbar from '../shared/components/Navbar'
import styled from 'styled-components'
import TOC from '../shared/components/TOC'
import AppProvider from '../shared/components/AppProvider'
import { pages } from '../shared/components/AppContext'
import Footer from '../shared/components/Footer'
import { color, isMobile } from '../shared/constant'
import FacetHead from './FacetHead'
import styles from "../styles/Home.module.css";
import FacetLabel from "../shared/components/FacetLabel";
import useMedia from '../shared/hooks/useMedia'
import TopBorder from '../shared/components/TopBorder'
import DocumentationSelection from '../shared/components/DocumentationSelection'

const TableDiv = styled.div`
     display: grid;
     grid-template-columns: 15% 50%;
     grid-gap: 9rem;

     @media (max-width: 720px) {
        display: grid;
        grid-template-columns: 90%;
        justify-content: center;
        text-align: initial;
    }
`;

const MainDiv = styled.div`
     padding-left: 7.5rem;
     @media (max-width: 720px) {
        padding-left: 0;
    }
`;

export default function DocumentationPage() {

    const media = useMedia();
    const isMobileView = isMobile(media);

    const menu = !isMobileView ? <div>
        <TOC />
    </div> : null;

    return (
        <AppProvider>
            <div className={styles.container}>
                <FacetHead />
                <TopBorder />
                <ContentContainer isNavBar>
                    <Navbar activePage={pages.Documentation} />
                </ContentContainer>
                <ContentContainer color={color.white} paddingTop={"6.5rem"}>
                    <DocumentationSelection />
                    <br />
                    <br />
                </ContentContainer>
                <ContentContainer color={color.secondaryGray}>
                    <Footer />
                </ContentContainer>
            </div>
        </AppProvider>
    )
}
