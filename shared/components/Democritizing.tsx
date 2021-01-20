import FacetLabel from "./FacetLabel";
import styled from 'styled-components';
import { color, fontSize } from "../constant";

const MainDiv = styled.div`
    background-color: ${color.white};
    width: 100%;
    text-align: center;
`;

export default function Democratizing() {
    return (
        <MainDiv>
            <div>
                <FacetLabel fontSize={fontSize.xxLarge} color={color.black} text="Learn More" />
            </div>
            <br /><br />
            <div>
                <a href="https://youtu.be/WARSSkFQHKg" target="_blank"><img src="./blank_video.svg" alt="Facet logo" /></a>
            </div>
            <br /><br />
        </MainDiv>
    );
}