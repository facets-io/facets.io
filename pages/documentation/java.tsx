import React from 'react';
import AppProvider from '../../shared/components/AppProvider';
import ContentContainer from '../../shared/components/ContentContainer';
import Navbar from '../../shared/components/Navbar';
import TopBorder from '../../shared/components/TopBorder';
import { pages } from '../../shared/components/AppContext'
import { color, isMobile } from '../../shared/constant';
import styled from 'styled-components';
import useMedia from '../../shared/hooks/useMedia';
import BackendTOC from '../../shared/components/BackendTOC'
import FacetLabel from '../../shared/components/FacetLabel';
import BackendDocumentation from '../../shared/components/BackendDocumentation'
import Footer from '../../shared/components/Footer';

const MainDiv = styled.div`
     padding-left: 7.5rem;
     @media (max-width: 720px) {
        padding-left: 0;
    }
`;

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


const Java = () => {

    const media = useMedia();
    const isMobileView = isMobile(media);

    const menu = !isMobileView ? <div>
        <BackendTOC />
    </div> : null;

    return <AppProvider>
        <TopBorder />
        <ContentContainer isNavBar>
            <Navbar activePage={pages.Documentation} />
        </ContentContainer>
        <ContentContainer color={color.white} paddingTop={"6.5rem"}>
            <MainDiv >
                <TableDiv>
                    {menu}
                    <div>
                        <FacetLabel color={color.black} fontSize={"40px"} fontWeight={700} text="Documentation" />
                        <br />
                        <br />
                        <BackendDocumentation />
                    </div>
                </TableDiv>
            </MainDiv>
            <br />
            <br />
        </ContentContainer>
        <ContentContainer color={color.secondaryGray}>
            <Footer />
        </ContentContainer>
    </AppProvider>
}

export default Java;