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
            <FacetLabel color={color.white} fontSize={fontSize.xxLarge} text="Usage Pricing" />
            <br />
            <br />
            <div>
                <PricingTable />
            </div>
        </MainDiv>
    );
}