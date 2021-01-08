import styled from 'styled-components'
import FacetButton from './FacetButton'
import FacetLabel from './FacetLabel'

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: 40% 60%;
`

export default function PricingCalculator() {
    return (
        <>
            <StyledContainer>
                <div>
                    <FacetLabel text="Your website" />
                </div>
                <div>
                    Dropdown goes here...
                </div>
            </StyledContainer>
            <StyledContainer>
                <div>
                    <FacetLabel text="Usage" />
                </div>
                <div>
                    Dropdown goes here...
                </div>
            </StyledContainer>
            <FacetButton text="Calculate" />
        </>
    )
}