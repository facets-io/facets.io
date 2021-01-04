import FacetLabel from "./FacetLabel";
import styled from 'styled-components';
import { color, documentationIds } from "../constant";

const MainDiv = styled.div`
    background-color: ${color.darkGray};
    width: 100%;
    order-left-style: solid;
    border-left-width: 2px;
    border-color: coral;
    border-left: 2px solid ${color.electricB};
    padding: .5rem;
    position: sticky;
    top: 0px;
`;

const PaddingDiv = styled.div`
    padding: .2rem;
    cursor: pointer;
`;

const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView();
    }
}

export default function TOC() {
    return (
        <MainDiv>
            <PaddingDiv onClick={() => { scrollTo(documentationIds.facetTitle) }}>
                <FacetLabel color={color.white} text="Facet" />
            </PaddingDiv>
            <PaddingDiv onClick={() => { scrollTo(documentationIds.facetDeclaration) }}>
                <FacetLabel color={color.white} text="Declaring a Facet" />
            </PaddingDiv>
            <PaddingDiv onClick={() => { scrollTo(documentationIds.holdOffRollOut) }}>
                <FacetLabel color={color.white} text="Holding off and rolling out facets" />
            </PaddingDiv>
            <PaddingDiv onClick={() => { scrollTo(documentationIds.oneLineCodeIntegration) }}>
                <FacetLabel color={color.white} text="One-line code integration" />
            </PaddingDiv>
            <PaddingDiv onClick={() => { scrollTo(documentationIds.faq) }}>
                <FacetLabel color={color.white} text="FAQ" />
            </PaddingDiv>
        </MainDiv>
    );
}