import FacetButton, { greenBtnColor } from './FacetButton';
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

const StyledInnerDiv = styled.div`
    padding: .2rem;
`

const StyledTable = styled.table`
    color: white;
    width: 100%;
    & td:first-child {  
       text-align: left;
    }
    & th:first-child {  
        text-align: left;
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
        <StyledTable>
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
                <td style={{ padding: '1rem' }}>
                    <FacetButton colorButtonStyle={greenBtnColor} color={color.green} fontSize={fontSize.medium} text="Contact us" />
                </td>
                <td>
                    <FacetButton width="60%" colorButtonStyle={greenBtnColor} fontSize={fontSize.medium} text="Calculate" />
                </td>
            </tr>
        </StyledTable>
    );
}