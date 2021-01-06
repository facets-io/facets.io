import styled from 'styled-components'
import { color } from '../constant'
import FacetInput from './FacetInput'
import FacetLabel from './FacetLabel'
import RadioButtons from './RadioButtons'

const StyledDiv = styled.div`
    display: grid;
`

const StyledForm = styled.form`
    background-color: ${color.darkBlue};
`

const TwoColumnGrid = styled.div`
    display: grid;
    grid-template-columns: 45% 45%;
    grid-gap: 5%;
    justify-content: center;
`

export default function ContactGrid() {
    return (
        <StyledDiv>
            <h2>Want To Get In Touch?</h2>
            <p>We'd love to hear from you! Contact us using the form below and we'll be happy to help answer your questions.</p>
            <h4>Get in touch</h4>
            <StyledForm onSubmit={(e) => e.preventDefault()}>
                <TwoColumnGrid>
                    <div>
                        <FacetLabel text="First name" />
                        <FacetInput />
                    </div>
                    <div>
                        <FacetLabel text="Last name" />
                        <FacetInput />
                    </div>
                </TwoColumnGrid>
                <br />
                <TwoColumnGrid>
                    <div>
                        <FacetLabel text="Email" />
                        <FacetInput />
                    </div>
                    <div>
                        <FacetLabel text="Company name" />
                        <FacetInput />
                    </div>
                </TwoColumnGrid>
                <br />
                <TwoColumnGrid>
                    <div>
                        <FacetLabel text="Do you currently use Facet?" />
                        <br />
                        <RadioButtons />
                    </div>
                </TwoColumnGrid>
            </StyledForm>
        </StyledDiv>
    )
}