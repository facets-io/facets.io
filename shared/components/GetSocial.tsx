import FacetButton, { electricBtnColor } from "./FacetButton";
import FacetInput from "./FacetInput";
import styled from 'styled-components';
import { color } from "../constant";

const MainDiv = styled.div`
    background-color: ${color.darkGray};
    width: 100%;
    text-align: center;
`;

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: 40% 40%;
    grid-gap: 5%;
    justify-content: center;
`;

export default function GetSocial() {
    return (
        <MainDiv>
            <div>
                {/* @ts-ignore */}
                <FacetButton style={{ width: '60%' }} text="Download Our Chrome Extension" />
            </div>
            <br />
            <StyledDiv>
                <div>
                    {/* @ts-ignore */}
                    <FacetInput placeholder="email address" />
                </div>
                <div>
                    {/* @ts-ignore */}
                    <FacetButton colorButtonStyle={electricBtnColor} text="STAY UPDATED" />
                </div>
            </StyledDiv>
        </MainDiv>
    );
}