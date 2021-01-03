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
            <div>
                // TODO video
            </div>
        </MainDiv>
    );
}