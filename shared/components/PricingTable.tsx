import FacetButton, { greenBtnColor, whiteBtnColor } from './FacetButton';
import styled from 'styled-components';
import { color, fontSize } from '../constant';
import FacetLabel from './FacetLabel';
import PricingCalculator from './PricingCalculator';
import { makeStyles } from '@material-ui/core';
import FacetDivider from './FacetDivider';
import MarginTop from './MarginTop';
import FacetInput from './FacetInput';

const MainDiv = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 40%;
    background-color: ${color.darkGray};
    width: 100%;
    height: 100%;
    text-align: left;
`;

const StyledTable = styled.table`
    color: white;
    width: 100%;
    border: none;

    border-spacing: 0;
    width: 100%;

    tr th{
        border-bottom: .2px solid ${color.ice};
    }

    & td:first-child {
       padding: 1rem;
       text-align: left;
       background-color: ${color.pricingBlack}
    }

    & td:nth-child(2) {
        padding: 1rem;
        text-align: center;
        background-color: ${color.pricingGray}
     }

    & th:nth-child(2) {
        padding: 1rem;
        text-align: center;
        background-color: ${color.pricingGray}
    }

    & th:first-child {
        padding: 1rem;
        text-align: left;
        background-color: ${color.pricingBlack}
    }
    
`

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: 40% 40%;
    justify-items: center;
    align-items: center;
`

export default function PricingTable() {

    return (
        <StyledTable cellspacing="0" cellpadding="0">
            <thead>
                <tr>
                    <th data-type="numeric">
                        <div>
                            <FacetLabel color={color.white} fontSize={fontSize.large} text="Requests" />
                            <br />
                            <FacetLabel color={color.white} fontSize={fontSize.small} text="per month" />
                        </div>
                    </th>
                    <th data-type="text-short">Per Request</th>
                    <th>Estimate cost</th>
                </tr>
            </thead>
            <tr>
                <td>
                    <FacetLabel color={color.white} fontSize={fontSize.large} text="First 100" />
                </td>
                <td>
                    <FacetLabel color={color.white} fontSize={fontSize.medium} text="free" />
                </td>
                <td>
                    <StyledDiv>
                        <div>
                            <FacetLabel color={color.white} fontSize={fontSize.medium} text="Requests" />
                        </div>
                        <div>
                            <FacetInput color={color.white} placeholder="e.g.: 3,0000" fontSize={fontSize.medium} />
                        </div>
                    </StyledDiv>
                </td>
            </tr>
            <tr>
                <td>
                    <FacetLabel color={color.white} fontSize={fontSize.large} text="Next 2,000" />
                </td>
                <td>
                    <FacetLabel color={color.white} fontSize={fontSize.medium} text="$0.03" />
                </td>
            </tr>
            <tr>
                <td>
                    <FacetLabel color={color.white} fontSize={fontSize.large} text="Next 10,000+" />
                </td>
                <td>
                    <FacetLabel color={color.white} fontSize={fontSize.medium} text="$0.025" />
                </td>
                <td>
                    <StyledDiv>
                        <div>
                            <FacetLabel color={color.white} fontSize={fontSize.medium} text="Cost" />
                        </div>
                        <div>
                            <FacetInput color={color.white} placeholder="$10.99/mo" fontSize={fontSize.medium} />
                        </div>
                    </StyledDiv>
                </td>
            </tr>
            <tr >
                <td>
                    <FacetLabel color={color.white} fontSize={fontSize.large} text="Enterprise" />
                </td>
                <td>
                    <FacetButton width='10rem' colorButtonStyle={whiteBtnColor} color={color.white} fontSize={fontSize.medium} text="Contact us" />
                </td>
                <td>
                    <FacetButton width='12rem' colorButtonStyle={whiteBtnColor} fontSize={fontSize.medium} text="Get Started" />
                </td>
            </tr>
        </StyledTable>
    );
}