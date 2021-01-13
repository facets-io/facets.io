import FacetButton, { greenBtnColor } from './FacetButton';
import styled from 'styled-components';
import { color, fontSize } from '../constant';
import FacetLabel from './FacetLabel';
import PricingCalculator from './PricingCalculator';
import { makeStyles } from '@material-ui/core';
import FacetDivider from './FacetDivider';
import MarginTop from './MarginTop';

const MainDiv = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 40%;
    background-color: ${color.darkGray};
    width: 100%;
    height: 100%;
    text-align: left;
`;

const StyledInnerDiv = styled.div`
    padding: .2rem;
`

export default function PricingTable() {

    const columnA = <div>
        <br />
        <div>
            <FacetLabel color={color.white} fontSize={fontSize.large} text="Requests" />
            <br />
            <FacetLabel color={color.white} fontSize={fontSize.small} text="per month" />
        </div>
        <FacetDivider />
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
        <br />
        <div>
            <FacetLabel color={color.white} fontSize={fontSize.large} text="Per Request" />
        </div>
        <br/>
        <div>
            <FacetDivider />
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
        <br />
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