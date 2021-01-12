import styled from 'styled-components';
import { color, fontSize } from '../constant';
import FacetLabel from './FacetLabel';
import PricingTable from './PricingTable';

const MainDiv = styled.div`
    background-color: ${color.darkGray};
    width: 100%;
    text-align: center;
`;

export default function PricingHeader() {
    return (
        <MainDiv>
            <FacetLabel color={color.white} fontSize={fontSize.xxLarge} text="Choose the plan that's right for your team" />
            <br />
            <br />
            <FacetLabel color={color.white} fontSize={fontSize.medium} text="Pay by month or the year, and cancel at any time." />
            <br />
            <br />
            <FacetLabel color={color.white} fontSize={fontSize.medium} text="Pay as you go." />
            <br />
            <br />
            <div>
                <PricingTable />
            </div>
        </MainDiv>
    );
}