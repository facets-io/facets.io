import FacetLabel from "./FacetLabel";
import styled from 'styled-components';
import { color, documentationIds, documentationText, fontSize } from "../constant";
import { pages } from "./AppContext";
import { act } from "react-dom/test-utils";
import { useEffect, useState } from "react";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import React from "react";

const MainDiv = styled.div`
    background-color: ${color.secondaryGray};
    width: 100%;
    padding: .5rem;
    position: sticky;
    top: 0px;
    border-radius: 5%;
    width: 195px;
`;

const PaddingDiv = styled.div`
    padding: .55rem;
    cursor: pointer;
`;

const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView(true);
        //document.getElementById("sweetness").scrollTop += 10;
        window.scrollBy(0, -100);
    }
}

export default function TOC() {
    const [activePage, setActivePage] = useState(documentationIds.facetTitle);

    // TODO abstract this
    const listenScrollEvent = e => {
        if (window.scrollY < document.getElementById(documentationIds.facetTitle)?.offsetTop) {
            setActivePage(documentationIds.facetTitle);
        } else if (window.scrollY > document.getElementById(documentationIds.facetTitle)?.offsetTop && window.scrollY < document.getElementById(documentationIds.download)?.offsetTop) {
            setActivePage(documentationIds.download);
        } else if (window.scrollY > document.getElementById(documentationIds.download)?.offsetTop && window.scrollY < document.getElementById(documentationIds.facetDeclaration)?.offsetTop) {
            setActivePage(documentationIds.facetDeclaration);
        } else if (window.scrollY > document.getElementById(documentationIds.facetDeclaration)?.offsetTop && window.scrollY < document.getElementById(documentationIds.oneLineCodeIntegration)?.offsetTop) {
            setActivePage(documentationIds.oneLineCodeIntegration);
        } else if (window.scrollY > document.getElementById(documentationIds.oneLineCodeIntegration)?.offsetTop && window.scrollY < document.getElementById(documentationIds.holdOffRollOut)?.offsetTop) {
            setActivePage(documentationIds.holdOffRollOut);
        } else if (window.scrollY > document.getElementById(documentationIds.holdOffRollOut)?.offsetTop) {
            setActivePage(documentationIds.faq);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
    }, []);

    const TocItem = (id, text) => <PaddingDiv onClick={() => { scrollTo(id) }}>
        <div style={{ backgroundColor: activePage === id ? color.primary : color.secondaryGray, padding: ".5rem", borderRadius: ".51rem" }} >
            <FacetLabel color={activePage === id ? color.white : color.black} fontSize={fontSize.medium} fontFamily={"Roboto"} fontWeight={400} text={text} />
        </div>
    </PaddingDiv>

    return (
        <MainDiv>
            {TocItem(documentationIds.facetTitle, documentationText.facetTitle)}
            {TocItem(documentationIds.download, documentationText.download)}
            {TocItem(documentationIds.facetDeclaration, documentationText.facetDeclaration)}
            {TocItem(documentationIds.oneLineCodeIntegration, documentationText.oneLineCodeIntegration)}
            {TocItem(documentationIds.holdOffRollOut, documentationText.holdOffRollOut)}
            {TocItem(documentationIds.faq, documentationText.faq)}
        </MainDiv>
    );
}