import { useContext } from 'react'
import FacetButton, { whiteBtnColor } from './FacetButton'
import styled from 'styled-components'
import { color, fontSize } from '../constant'
import FacetLabel from './FacetLabel'
import FacetInput from './FacetInput'
import AppContext from './AppContext'
import MarginTop from './MarginTop'
import FacetDivider from './FacetDivider'

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
                    <td>
                        <StyledDiv>
                            <div>
                                <FacetLabel color={color.white} fontSize={fontSize.medium} text="Requests" />
                            </div>
                            <div>
                                <FacetInput onChange={(e) => { calculate(e.target.value) }} color={color.white} placeholder="e.g.: 3,0000" fontSize={fontSize.medium} />
                            </div>
                        </StyledDiv>
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
                        <FacetLabel color={color.white} fontSize={fontSize.medium} text={pricingTier[2].cost.toFixed(7)} />
                    </td>
                    <td>
                        <StyledDiv>
                            <div>
                                <FacetLabel color={color.white} fontSize={fontSize.medium} text="Cost" />
                            </div>
                            <div>
                                <u>
                                    <FacetLabel color={color.white} fontSize={fontSize.medium} text={`${estimatedCost}`} />
                                </u>
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