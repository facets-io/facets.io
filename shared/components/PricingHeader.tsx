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
            <FacetLabel color={color.black} fontSize={"38px"} fontWeight={700}  text="Pricing that scales with your needs" />
            <br />
            <br />
            <br />
            <FacetLabel color={color.black} fontSize={"20px"} fontWeight={300} text="Have unlimited access to product features and pay as you go." />

            <br />
            <br />
            <br />
            <div>
                <PricingTable />
            </div>
        </MainDiv>
    );
}