import FacetLabel from "./FacetLabel";
import styled from 'styled-components';
import { color, fontSize } from "../constant";

const MainDiv = styled.div`
    background-color: ${color.darkGray};
    width: 100%;
    text-align: center;
`;

export default function Democratizing() {
    return (
        <MainDiv>
            <div>
                <FacetLabel fontSize={fontSize.xxLarge} color={color.white} text="Democratizing feature life cycle" />
            </div>
            <br />
            <div>
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/WARSSkFQHKg" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </MainDiv>
    );
}