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
import styles from "../styles/Home.module.css";
import FacetLabel from "../shared/components/FacetLabel";
import TopBorder from '../shared/components/TopBorder'

const TableDiv = styled.div`
     display: grid;
     grid-template-columns: 15% 50%;
     grid-gap: 9rem;
     padding-bottom: 50%
`;

const MainDiv = styled.div`
     padding-left: 7.5rem;
`;

const StickyDiv = styled.div`
    position: fixed;
    top: 100px;

`;

const InnerStickyDiv = styled.div`
  
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
                <ContentContainer color={color.white} paddingTop={"6.5rem"}>
                    <MainDiv >
                        <TableDiv>
                            <StickyDiv>
                                <InnerStickyDiv />
                                <TOC />
                                <InnerStickyDiv />
                            </StickyDiv>
                            <div></div>
                            <div>
                                <FacetLabel color={color.black} fontSize={"39px"} fontWeight={700} text="Documentation" />
                                <br />
                                <br />
                                <Documentation />
                            </div>
                        </TableDiv>
                    </MainDiv>
                </ContentContainer>
                <ContentContainer color={color.secondaryGray}>
                    <Footer />
                </ContentContainer>
            </div>
        </AppProvider>
    )
}
