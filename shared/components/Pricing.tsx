import styled from 'styled-components';
import { color, fontSize } from '../constant';
import FacetLabel from './FacetLabel';

const MainDiv = styled.div`
    background-color: ${color.darkGray};
    width: 100%;
    height: 100%;
    text-align: center;
`;

export default function Pricing() {
    return (
        <MainDiv>
            <FacetLabel color={color.white} fontSize={fontSize.xxLarge} text="Choose the plan that's right for your team" />
            <br />
            <br />
            <FacetLabel color={color.white} fontSize={fontSize.medium} text="Pay by month or year, and cancel any time." />
            <br />
        </MainDiv>
    );
}