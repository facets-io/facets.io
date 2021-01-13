import FacetButton, { whiteBtnColor } from "./FacetButton";
import FacetInput from "./FacetInput";
import styled from 'styled-components';

const MainDiv = styled.div`
    text-align: center;
    display: grid;
    grid-template-columns: 20rem 10rem;
    grid-gap: 2%;
    justify-content: center;
`

const CoreDiv = styled.div`
    width: 100%;
`

export default function StayUpdated() {
    return (
        <CoreDiv>
            <MainDiv>
                <div>
                    <FacetInput width="20rem" placeholder="email address" />
                </div>
                <div>
                    <FacetButton width="10rem" colorButtonStyle={whiteBtnColor} text="STAY UPDATED" />
                </div>
            </MainDiv>
        </CoreDiv>
    );
}