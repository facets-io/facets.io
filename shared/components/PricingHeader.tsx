import styled from 'styled-components';
import { color, fontSize } from '../constant';
import FacetLabel from './FacetLabel';
import PricingTable from './PricingTable';

const MainDiv = styled.div`
    background-color: ${color.xx};
    width: 100%;
    text-align: center;
`;

export default function PricingHeader() {
    return (
        <MainDiv>
            <FacetLabel color={color.black} fontSize={fontSize.xxLarge} text="Pricing that scales with your needs" />
            <br />
            <br />
            <br />
            <FacetLabel color={color.black} fontSize={fontSize.large} fontFamily="Futura" fontWeight={200} text="Unlimited access to product features and pay as you go" />

            <br />
            <br />
            <br />
            <div>
                <PricingTable />
            </div>
        </MainDiv>
    );
}