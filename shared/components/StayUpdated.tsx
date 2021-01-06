import FacetButton, { electricBtnColor } from "./FacetButton";
import FacetInput from "./FacetInput";
import styled from 'styled-components';

const MainDiv = styled.div`
    width: 100%;
    text-align: center;
    display: grid;
    grid-template-columns: 15rem 15rem;
    grid-gap: 5%;
    justify-content: center;
`;

export default function StayUpdated() {
    return (
        <MainDiv>
            <div>
                {/* @ts-ignore */}
                <FacetInput placeholder="email address" />
            </div>
            <div>
                {/* @ts-ignore */}
                <FacetButton colorButtonStyle={electricBtnColor} text="STAY UPDATED" />
            </div>
        </MainDiv>
    );
}