import { useContext, useState } from 'react'
import FacetButton, { primaryBtnColor, secondaryBtnColor } from './FacetButton'
import styled from 'styled-components'
import { color, fontSize } from '../constant'
import FacetLabel from './FacetLabel'
import AppContext from './AppContext'
import FacetDivider from './FacetDivider'
import FacetInputFullHeight from './FacetInputFullHeight'
import NumberFormat from 'react-number-format';
import { TextField } from '@material-ui/core'

const MainDiv = styled.div`
    display: grid;
    justify-content: center;
`;

const TableGrid = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-rows: 100%;
`

const StyledTable = styled.table`
    
    @media (max-width: 720px) {
        width: 100% !important;
    }

    color: ${color.black};
    font-family: Manrope;
    font-size: 10px;
    width: 40rem !important;
    border: none;
    justify-content: center;
    align-items: center;

    border-spacing: 0;
    width: 100%;

    tr th{
        border-bottom: .2px solid #C0C0C0;
        text-align: left;
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

const BorderDiv = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
`;

const BorderDivItem = styled.div`
    border: 1px solid #C0C0C0;
    borderLeft: none;
    backgroundColor: color.pricingGray;
    padding: 2rem 0rem 2rem 0rem;
    text-align: center;
`

export default function PricingTable() {

    //@ts-ignore
    const { estimatedCost, setEstimatedCost, calculate, pricingTier } = useContext(AppContext);
    const [presentableCost, setPresentableCost] = useState('');

    return (
        <MainDiv>
            <StyledTable cellspacing="0" cellpadding="0">
                <thead>
                    <tr>
                        <th style={{ paddingLeft: '3rem' }} data-type="numeric">
                            <div>
                                <FacetLabel color={color.black} fontWeight={700} fontFamily={"Manrope"} fontSize={fontSize.xLarge} text="Monthly Requests" />
                            </div>
                        </th>
                        <th data-type="text-short"><FacetLabel color={color.black} fontWeight={700} fontFamily={"Manrope"} fontSize={fontSize.xLarge} text="Price" /></th>
                    </tr>
                </thead>
                <tr>
                    <td>
                        <br />
                        <FacetLabel color={color.black} fontWeight={700} fontFamily={"Manrope"} fontSize={"17px"} text={pricingTier[0].name} />
                        <br />
                        <br />
                        <br />
                        <br />
                    </td>
                    <td>
                        <br />
                        <FacetLabel color={color.primary} fontFamily="Manrope" fontWeight={700} fontSize={"30px"} text={pricingTier[0].costText} />
                        <br />
                        <br />
                        <br />
                        <br />
                        <FacetDivider />
                    </td>
                </tr>
                <tr>
                    <td>
                        <FacetLabel color={color.black} fontWeight={600} fontFamily="Manrope" fontSize={"17px"} text={pricingTier[1].name} />
                        <br />
                        <br />
                        <br />
                        <br />
                    </td>
                    <td>
                        <FacetLabel color={color.black} fontFamily="Manrope" fontSize={"17px"} text={pricingTier[1].costText} />
                        <br />
                        <br />
                        <br />
                        <br />
                        <FacetDivider />
                    </td>
                </tr>
                <tr>
                    <td>
                        <FacetLabel color={color.black} fontWeight={600} fontFamily="Manrope" fontSize={"17px"} text={pricingTier[2].name} />
                        <br />
                        <br />
                        <br />
                        <br />
                    </td>
                    <td>
                        <FacetLabel color={color.black} fontFamily="Manrope" fontSize={"17px"} text={pricingTier[2].costText} />
                        <br />
                        <br />
                        <br />
                        <br />
                        <FacetDivider />
                    </td>
                </tr>
                <tr>
                    <td>
                        <FacetLabel color={color.black} fontWeight={600} fontFamily="Manrope" fontSize={"17px"} text={pricingTier[3].name} />
                        <br />
                        <br />
                        <br />
                        <br />
                    </td>
                    <td>
                        <FacetLabel color={color.black} fontFamily="Manrope" fontSize={"17px"} text={pricingTier[3].costText} />
                        <br />
                        <br />
                        <br />
                        <br />
                        <FacetDivider />
                    </td>
                </tr>
                <tr >
                    <td>
                        <FacetLabel color={color.black} fontWeight={600} fontFamily="Manrope" fontSize={"17px"} text="Enterprise" />
                        <br />
                        <br />
                    </td>
                    <td>
                        <FacetButton width='10rem' colorButtonStyle={secondaryBtnColor} fontSize={fontSize.medium} text="Contact Sales" onClick={() => { location.href = '/contact/' }} />
                        <br />
                        <br />
                    </td>
                </tr>
            </StyledTable>

            <br />
            <br />
            <br />
            <TableGrid>
                <StyledTable style={{ backgroundColor: color.pricingGray }}>
                    <thead >
                        <tr>
                            <th colSpan={2} style={{ textAlign: 'center' }} data-type="numeric">
                                <div>
                                    <FacetLabel color={color.black} fontWeight={700} fontFamily={"Manrope"} fontSize={fontSize.xLarge} text="Estimate Cost" />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <br />
                    <br />
                    <tr>
                        <td colSpan={2}>
                            <BorderDiv>
                                <BorderDivItem>
                                    <FacetLabel color={color.black} fontWeight={700} fontFamily="Manrope" fontSize={"17px"} text="Requests" />
                                </BorderDivItem>
                                <BorderDivItem>


                                    <NumberFormat
                                        thousandSeparator={true}
                                        type="text"
                                        value={presentableCost}
                                        customInput={FacetInputFullHeight}
                                        placeholder="3,000"
                                        onValueChange={({ value: v }) => {
                                            setPresentableCost(v);
                                            const cost = calculate(v);
                                            setEstimatedCost(cost);
                                        }}
                                    />

                                </BorderDivItem>
                            </BorderDiv>
                        </td>
                    </tr>
                    <tr>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <BorderDiv>
                                <BorderDivItem>
                                    <FacetLabel color={color.black} fontWeight={700} fontFamily="Manrope" fontSize={"17px"} text="Monthly Cost" />
                                </BorderDivItem>
                                <BorderDivItem>
                                    <FacetLabel color={color.black} fontWeight={700} fontFamily="Manrope" fontSize={fontSize.xLarge} text={`${estimatedCost}`} />
                                </BorderDivItem>
                            </BorderDiv>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <br />
                            <div style={{ textAlign: 'center' }}>
                                <FacetButton width='50%' colorButtonStyle={primaryBtnColor} fontSize={fontSize.medium} text="Get Started" onClick={() => { location.href = 'https://chrome.google.com/webstore/detail/facetninja/hpkpjkdhgldjhcopdkmljdgceeojoglh' }} />
                            </div>
                            <br />
                        </td>
                    </tr>
                </StyledTable>
            </TableGrid>
            <br />
            <br />
        </MainDiv >
    );
}