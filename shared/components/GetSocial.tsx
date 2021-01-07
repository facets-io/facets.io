import FacetButton from "./FacetButton";
import styled from 'styled-components';
import { color } from "../constant";

const MainDiv = styled.div`
    background-color: ${color.darkGray};
    width: 100%;
    text-align: center;
`;

export default function GetSocial() {
    return (
        <MainDiv>
            <div>
                {/* @ts-ignore */}
                <FacetButton style={{ width: '30%' }} text="Download Our Chrome Extension" />
            </div>
        </MainDiv>
    );
}