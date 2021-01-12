import { color, fontSize } from '../constant'
import FacetButton, { greenBtnColor } from './FacetButton'
import FacetInput from './FacetInput'
import FacetLabel from './FacetLabel'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: 40% 40%;
`

export default function PricingCalculator() {
    return (
        <div>
            <div>
                <FacetLabel color={color.white} fontSize={fontSize.large} text="Estimate Your Cost" />
            </div>
            <StyledDiv>
                <div>
                    <FacetLabel color={color.white} fontSize={fontSize.medium} text="Requests" />
                </div>
                <div>
                    <FacetInput color={color.white} placeholder="e.g.: 3,0000" fontSize={fontSize.medium} />
                </div>
            </StyledDiv>
            <StyledDiv>
                <div>
                    <FacetLabel color={color.white} fontSize={fontSize.medium} text="Cost" />
                </div>
                <div>
                    <FacetInput color={color.white} placeholder="$10.99/mo" fontSize={fontSize.medium} />
                </div>
            </StyledDiv>
            <div>
                <FacetButton colorButtonStyle={greenBtnColor} fontSize={fontSize.medium} text="Contact us" />
            </div>
        </div>
    )
}