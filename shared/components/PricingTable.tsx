import { useContext } from 'react'
import FacetButton, { whiteBtnColor } from './FacetButton'
import styled from 'styled-components'
import { color, fontSize } from '../constant'
import FacetLabel from './FacetLabel'
import FacetInput from './FacetInput'
import AppContext from './AppContext'
import MarginTop from './MarginTop'
import FacetDivider from './FacetDivider'
import FacetInputFullHeight from './FacetInputFullHeight'

const MainDiv = styled.div`
    display: grid;
    justify-content: center;
`;

const StyledTable = styled.table`
    color: white;
    width: 60rem !important;
    border: none;

    border-spacing: 0;
    width: 100%;

    tr th{
        border-bottom: .2px solid ${color.grayA};
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

    & td:nth-child(3) {
        padding: 1rem;
        text-align: center;
        background-color: ${color.pricingLightGray}
     }

    & th:nth-child(3) {
        padding: 1rem;
        text-align: center;
        background-color: ${color.pricingLightGray}
    }

    & th:first-child {
        padding: 1rem;
        text-align: left;
        background-color: ${color.pricingBlack}
    }
    
`

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: 49.9% 0.9% 50%;
    justify-items: center;
    align-items: center;
    background-color: ${color.pricingDivDark};
`

const StyledDivItem = styled.div`
    padding: 2rem;
`;

export default function PricingTable() {

    //@ts-ignore
    const { estimatedCost, calculate, pricingTier } = useContext(AppContext);

    return (
        <MainDiv>
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
                        <FacetLabel color={color.white} fontSize={fontSize.large} text={pricingTier[0].name} />
                    </td>
                    <td>
                        <FacetLabel color={color.white} fontSize={fontSize.medium} text={'free'} />
                        <br />
                        <br />
                        <FacetDivider />
                    </td>
                    <td rowSpan={5}>
                        <StyledDiv>
                            <StyledDivItem>
                                <FacetLabel color={color.white} fontSize={fontSize.medium} text="Requests (/mo)" />
                            </StyledDivItem>
                            <FacetDivider orientation="vertical" flexItem />
                            <div style={{ height: '100%', width: '100%' }}>
                                <FacetInputFullHeight onChange={(e) => { calculate(e.target.value) }} placeholder="e.g.: 3,0000" />
                            </div>
                        </StyledDiv>
                        <br />
                        <br />
                        <StyledDiv>
                            <StyledDivItem>
                                <FacetLabel color={color.white} fontSize={fontSize.medium} text="Cost" />
                            </StyledDivItem>
                            <FacetDivider orientation="vertical" flexItem />
                            <StyledDivItem>
                                <u>
                                    <FacetLabel color={color.white} fontSize={fontSize.medium} text={`${estimatedCost}`} />
                                </u>
                            </StyledDivItem>
                        </StyledDiv>
                        <br />
                        <br />
                        <div>
                            <FacetButton width='12rem' colorButtonStyle={whiteBtnColor} fontSize={fontSize.medium} text="Get Started" />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <FacetLabel color={color.white} fontSize={fontSize.large} text={pricingTier[1].name} />
                    </td>
                    <td>
                        <FacetLabel color={color.white} fontSize={fontSize.medium} text={`$ ${pricingTier[1].cost}`} />
                        <br />
                        <br />
                        <FacetDivider />
                    </td>
                </tr>
                <tr>
                    <td>
                        <FacetLabel color={color.white} fontSize={fontSize.large} text={pricingTier[2].name} />
                    </td>
                    <td>
                        <FacetLabel color={color.white} fontSize={fontSize.medium} text={`$ ${pricingTier[2].cost.toFixed(7)}`} />
                        <br />
                        <br />
                        <FacetDivider />
                    </td>
                </tr>
                <tr >
                    <td>
                        <FacetLabel color={color.white} fontSize={fontSize.large} text="Enterprise" />
                    </td>
                    <td>
                        <FacetButton width='10rem' colorButtonStyle={whiteBtnColor} color={color.white} fontSize={fontSize.medium} text="Contact us" />
                        <br />
                        <FacetDivider />
                    </td>
                </tr>
                <tr >
                    <td>
                        <FacetLabel color={color.white} fontSize={fontSize.large} text="Self Hosted" />
                    </td>
                    <td>
                        <div>
                            <FacetLabel color={color.white} fontSize={fontSize.medium} text={"$ 5,000/mo"} />
                        </div>
                        <MarginTop value='.5rem' />
                        <div>
                            <FacetLabel color={color.white} fontSize={fontSize.small} text={"* Free for OSS and NPOs"} />
                        </div>
                    </td>
                </tr>
            </StyledTable>
        </MainDiv>
    );
}