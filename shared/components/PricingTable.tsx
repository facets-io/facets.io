import FacetButton, { greenBtnColor } from './FacetButton';
import FacetLink from './FacetLink';
import styled from 'styled-components';
import { color, fontSize } from '../constant';
import FacetLabel from './FacetLabel';
import FacetSwitch from './FacetSwitch';
import FacetInput from './FacetInput';
import PricingCalculator from './PricingCalculator';

const MainDiv = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 40%;
    grid-gap: 5%;
    background-color: ${color.darkGray};
    width: 100%;
    height: 100%;
`;

export default function PricingTable() {

    const columnA = <div>
        <div>
            <FacetLabel color={color.white} fontSize={fontSize.large} text="Requests" />
            <br />
            <FacetLabel color={color.white} fontSize={fontSize.medium} text="per month" />
        </div>
        <div>
            <FacetLabel color={color.white} fontSize={fontSize.large} text="First 100" />
        </div>
        <div>
            <FacetLabel color={color.white} fontSize={fontSize.large} text="First 2,000" />
        </div>
        <div>
            <FacetLabel color={color.white} fontSize={fontSize.large} text="First 10,000+" />
        </div>
        <div>
            <FacetLabel color={color.white} fontSize={fontSize.large} text="Enterprise" />
        </div>
    </div>;

    const columnB = <div>
        <div>
            <FacetLabel color={color.white} fontSize={fontSize.large} text="Per Request" />
            <br />
            <FacetLabel color={color.white} fontSize={fontSize.medium} text="free" />
        </div>
        <div>
            <FacetLabel color={color.white} fontSize={fontSize.medium} text="$0.03" />
        </div>
        <div>
            <FacetLabel color={color.white} fontSize={fontSize.medium} text="$0.025" />
        </div>
        <div>
            <FacetButton colorButtonStyle={greenBtnColor} color={color.green} fontSize={fontSize.medium} text="Contact us" />
        </div>
    </div>

    const columnC = <div>
        <PricingCalculator />
    </div>

    return (
        <MainDiv>
            <div>
                {columnA}
            </div>
            <div>
                {columnB}
            </div>
            <div>
                {columnC}
            </div>
        </MainDiv>
    );
}