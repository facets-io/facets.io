import FacetButton from './FacetButton';
import FacetLink from './FacetLink';
import styled from 'styled-components';
import { color, fontSize } from '../constant';
import FacetLabel from './FacetLabel';
import FacetSwitch from './FacetSwitch';

const MainDiv = styled.div`
    display: grid;
    background-color: ${color.darkGray};
    width: 100%;
    height: 100%;
`;

export default function PricingTable() {

    const MonthlyAnnually = <div>
        Billed Monthly Or Billed Annually
    </div>

    return (
        <MainDiv>
            {MonthlyAnnually}
        </MainDiv>
    );
}