import FacetLabel from "./FacetLabel";
import styled from 'styled-components';
import {color, documentationIds, fontSize} from "../constant";
import {pages} from "./AppContext";
import {act} from "react-dom/test-utils";
import {useEffect, useState} from "react";
import {loadGetInitialProps} from "next/dist/next-server/lib/utils";
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
    const [activePage,setActivePage] = useState(documentationIds.facetTitle);
    const [state,setState] = useState({
        color: 'white'
    });

    const listenScrollEvent = e => {
        if (window.scrollY < document.getElementById(documentationIds.facetTitle)?.offsetTop) {
            setActivePage(documentationIds.facetTitle)
        } else if (window.scrollY > document.getElementById(documentationIds.facetTitle)?.offsetTop && window.scrollY < document.getElementById(documentationIds.oneLineCodeIntegration)?.offsetTop) {
            setActivePage(documentationIds.oneLineCodeIntegration)
        } else if (window.scrollY > document.getElementById(documentationIds.oneLineCodeIntegration)?.offsetTop && window.scrollY < document.getElementById(documentationIds.facetDeclaration)?.offsetTop) {
            setActivePage(documentationIds.facetDeclaration)
         }  else if (window.scrollY > document.getElementById(documentationIds.facetDeclaration)?.offsetTop && window.scrollY < document.getElementById(documentationIds.holdOffRollOut)?.offsetTop) {
            setActivePage(documentationIds.holdOffRollOut)
        } else if (window.scrollY > document.getElementById(documentationIds.holdOffRollOut)?.offsetTop) {
            setActivePage(documentationIds.faq)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
    }, [])

    return (
        <MainDiv id="sweetness">
            <PaddingDiv onClick={() => { scrollTo(documentationIds.facetTitle)}}>
                <div style={{ backgroundColor: activePage === documentationIds.facetTitle ? color.primary : color.secondaryGray, padding: ".5rem", borderRadius: ".51rem"}} >
                    <FacetLabel color={activePage === documentationIds.facetTitle ? color.white : color.black} fontSize={fontSize.medium} fontFamily={"Roboto"} fontWeight={400} text="Facet" />
                </div>
            </PaddingDiv>
            <PaddingDiv onClick={() => { scrollTo(documentationIds.oneLineCodeIntegration)}}>
                <div style={{ backgroundColor: activePage === documentationIds.oneLineCodeIntegration ? color.primary : color.secondaryGray, padding: ".5rem", borderRadius: ".51rem"}} >
                    <FacetLabel color={activePage === documentationIds.oneLineCodeIntegration ? color.white : color.black} fontSize={fontSize.medium} fontFamily={"Roboto"} fontWeight={400} text="Integration" />
                    {/*<FacetLabel color={state.color} fontSize={fontSize.medium} fontFamily={"Roboto"} fontWeight={400} text="Integration" />*/}
                </div>
            </PaddingDiv>
            <PaddingDiv onClick={() => { scrollTo(documentationIds.facetDeclaration); setActivePage(documentationIds.facetDeclaration) }}>
                <div style={{ backgroundColor: activePage === documentationIds.facetDeclaration ? color.primary : color.secondaryGray, padding: ".5rem", borderRadius: ".51rem"}} >
                    <FacetLabel color={activePage === documentationIds.facetDeclaration ? color.white : color.black} fontSize={fontSize.medium} fontFamily={"Roboto"} fontWeight={400} text="Declare" />
                </div>
            </PaddingDiv>
            <PaddingDiv onClick={() => { scrollTo(documentationIds.holdOffRollOut); setActivePage(documentationIds.holdOffRollOut) }}>
                <div style={{ backgroundColor: activePage === documentationIds.holdOffRollOut ? color.primary : color.secondaryGray, padding: ".5rem", borderRadius: ".51rem"}} >
                    <FacetLabel color={activePage === documentationIds.holdOffRollOut ? color.white : color.black} fontSize={fontSize.medium} fontFamily={"Roboto"} fontWeight={400} text="Rollout" />
                </div>
            </PaddingDiv>
            <PaddingDiv onClick={() => { scrollTo(documentationIds.faq); setActivePage(documentationIds.faq);}}>
                <div style={{ backgroundColor: activePage === documentationIds.faq ? color.primary : color.secondaryGray, padding: ".5rem", borderRadius: ".51rem"}} >
                    <FacetLabel color={activePage === documentationIds.faq ? color.white : color.black} fontSize={fontSize.medium} fontFamily={"Roboto"} fontWeight={400} text="Common Questions " />
                </div>
            </PaddingDiv>
        </MainDiv>
    );
}