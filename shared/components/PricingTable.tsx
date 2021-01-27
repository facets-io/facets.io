import { useContext, useState } from 'react'
import FacetButton, {primaryBtnColor, secondaryBtnColor} from './FacetButton'
import styled from 'styled-components'
import { color, fontSize } from '../constant'
import FacetLabel from './FacetLabel'
import FacetInput from './FacetInput'
import AppContext from './AppContext'
import MarginTop from './MarginTop'
import FacetDivider from './FacetDivider'
import FacetInputFullHeight from './FacetInputFullHeight'
import PricingCalculator from "./PricingCalculator";

const MainDiv = styled.div`
    display: grid;
    justify-content: center;
`;

const StyledTable = styled.table`
    color: ${color.black};
    font-family: Manrope;
    font-size: 21px;
    width: 60rem !important;
    border: none;

    border-spacing: 0;
    width: 100%;

    tr th{
        border-bottom: .2px solid #C0C0C0;
        text-align: center;
    }

    & td:first-child {
       padding: 1rem;
       padding-left: 3rem;
       padding-right: 3rem;
       text-align: left;
       background-color: ${color.pricingGray}
    }

    & td:nth-child(2) {
        padding: 1rem;
        text-align: center;
        background-color: ${color.secondaryGray}
     }

    & th:nth-child(2) {
        padding: 1rem;
        text-align: center;
        background-color: ${color.secondaryGray}
    }

    & td:nth-child(3) {
        padding:1rem;
        text-align: center;
        background-color: ${color.pricingGray}
     }

    & th:nth-child(3) {
        padding: 1rem;
        text-align: center;
        background-color: ${color.pricingGray}
    }

    & th:first-child {
        padding: 1rem;
        text-align: left;
        background-color: ${color.pricingGray}
    }
    
`

const PricingCalculatorDiv = styled.div`
    display: grid;
    grid-template-rows: 1% 47% 80%;
    justify-items: center;
    align-items: center;
    background-color: ${color.pricingGray};
`

const StyledDivItem = styled.div`
    padding: 2rem;
`;

export default function PricingTable() {

    //@ts-ignore
    const { estimatedCost, calculate, pricingTier } = useContext(AppContext);
    const [presentableCost, setPresentableCost] = useState('');

    return (
        <MainDiv>
            <StyledTable cellspacing="0" cellpadding="0">
                <thead>
                    <tr>
                        <th data-type="numeric" style={{textAlign: "center"}}>
                            <div>
                                <FacetLabel color={color.black} fontWeight={700} fontFamily={"Manrope"} fontSize={fontSize.large} text="Monthly Requests" />
                            </div>
                        </th>
                        <th data-type="text-short">Pricing</th>
                        <th>Calculator</th>
                    </tr>
                </thead>
                <tr>
                    <td>
                        <FacetLabel color={color.black} fontWeight={700} fontFamily={"Manrope"}  fontSize={"17px"} text={pricingTier[0].name} />
                    </td>
                    <td>
                        <FacetLabel color={color.primary} fontFamily="Manrope"  fontWeight={700} fontSize={"17px"} text={pricingTier[0].costText} />
                        <br />
                        <br />
                        <FacetDivider />
                    </td>
                    <td rowSpan={5}>
                        <PricingCalculatorDiv>
                            <table cellSpacing={0} width={"95%"}>
                                <tr>
                                    <td style={{border: "1px solid #C0C0C0", padding: "1rem",  textAlign: "center"}}>
                                        <FacetLabel color={color.black} fontWeight={700} fontFamily="Manrope"  fontSize={"17px"} text="Requests" />
                                    </td>
                                    <td style={{border: "1px solid #C0C0C0", borderLeft: "none", backgroundColor: color.pricingGray}}>
                                        <FacetInputFullHeight
                                            value={presentableCost}
                                            onChange={(e) => {
                                                var num = e.target.value.replace(/,/gi, "")
                                                var num2 = num.split(/(?=(?:\d{3})+$)/).join(",")
                                                setPresentableCost(num2)
                                                const numberWithCommas = parseFloat(num2.replace(/,/g, ''));
                                                calculate(numberWithCommas)
                                            }} placeholder="3,000" />
                                    </td>
                                </tr>
                                <tr>
                                    <br/>
                                </tr>
                                <tr>
                                    <td style={{border: "1px solid #C0C0C0", padding: "1rem",  textAlign: "center"}}>
                                        <FacetLabel color={color.black} fontWeight={700} fontFamily="Manrope"  fontSize={"17px"} text="Monthly Cost" />
                                    </td>
                                    <td style={{border: "1px solid #C0C0C0", borderLeft: "none", backgroundColor: color.pricingGray}}>
                                        <FacetLabel color={color.black} fontWeight={700} fontFamily="Manrope"  fontSize={fontSize.xLarge} text={`${estimatedCost}`}/>
                                    </td>
                                </tr>
                            </table>
                            <div>
                                <br />
                            </div>
                            <div>
                                <FacetButton width='12rem' colorButtonStyle={primaryBtnColor} fontSize={fontSize.medium} text="Get Started" onClick={() => {location.href='https://chrome.google.com/webstore/detail/facetninja/hpkpjkdhgldjhcopdkmljdgceeojoglh'}}/>
                            </div>
                        </PricingCalculatorDiv>
                    </td>
                </tr>
                <tr>
                    <td>
                        <FacetLabel color={color.black} fontWeight={600} fontFamily="Manrope"  fontSize={"17px"}  text={pricingTier[1].name} />
                    </td>
                    <td>
                        <FacetLabel color={color.black} fontFamily="Manrope"  fontSize={"17px"} text={pricingTier[1].costText} />
                        <br />
                        <br />
                        <FacetDivider />
                    </td>
                </tr>
                <tr>
                    <td>
                        <FacetLabel color={color.black} fontWeight={600} fontFamily="Manrope"  fontSize={"17px"}  text={pricingTier[2].name} />
                    </td>
                    <td>
                        <FacetLabel color={color.black} fontFamily="Manrope" fontSize={"17px"} text={pricingTier[2].costText}/>
                        <br />
                        <br />
                        <FacetDivider />
                    </td>
                </tr>
                <tr >
                    <td>
                        <FacetLabel color={color.black} fontWeight={600} fontFamily="Manrope"  fontSize={"17px"}  text="Enterprise" />
                    </td>
                    <td>
                        <FacetButton width='10rem' colorButtonStyle={secondaryBtnColor} fontSize={fontSize.medium} text="Contact Sales" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <FacetLabel color={color.black} fontWeight={600} fontFamily="Manrope"  fontSize={"17px"}  text="Self Hosted" />
                    </td>
                    <td>
                        <div>
                            <FacetLabel color={color.black} fontFamily="Manrope" fontSize={"17px"} text={"$ 5,000"} />
                        </div>
                        <MarginTop value='.5rem' />
                        <div>
                            <FacetLabel color={color.black} fontFamily="Manrope" fontSize={"17px"} text={"* Free for OSS and NPOs"} />
                        </div>
                    </td>
                </tr>
            </StyledTable>
        </MainDiv>
    );
}