import FacetLabel from "./FacetLabel";
import styled from 'styled-components';
import { color } from "../constant";

const MainDiv = styled.div`
    background-color: ${color.darkGray};
    width: 100%;
    order-left-style: solid;
    border-left-width: 2px;
    border-color: coral;
    border-left: 2px solid ${color.electricB};
    padding: .5rem;
`;

const PaddingDiv = styled.div`
    padding: .2rem;
`;

export default function TOC() {
    return (
        <MainDiv>
            <PaddingDiv>
                <FacetLabel color={color.white} text="Facet" />
            </PaddingDiv>
            <PaddingDiv>
                <FacetLabel color={color.white} text="Declaring a Facet" />
            </PaddingDiv>
            <PaddingDiv>
                <FacetLabel color={color.white} text="Holding off and rolling out facets" />
            </PaddingDiv>
            <PaddingDiv>
                <FacetLabel color={color.white} text="One-line code integration" />
            </PaddingDiv>
            <PaddingDiv>
                <FacetLabel color={color.white} text="FAQ" />
            </PaddingDiv>
        </MainDiv>
    );
}