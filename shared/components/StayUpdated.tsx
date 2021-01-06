import FacetButton from "./FacetButton";
import FacetInput from "./FacetInput";
import styled from 'styled-components';

const MainDiv = styled.div`
    width: 100%;
    text-align: center;
`;

export default function StayUpdated() {
    return (
        <MainDiv>
            <div>
                <FacetInput placeholder="email address" />
            </div>
            <div>
                <FacetButton text="STAY UPDATED" />
            </div>
        </MainDiv>
    );
}