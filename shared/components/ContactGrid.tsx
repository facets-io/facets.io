import { TextField } from '@material-ui/core'
import styled from 'styled-components'
import { color } from '../constant'
import FacetButton, { electricBtnColor } from './FacetButton'
import FacetInput, { electricColor } from './FacetInput'
import FacetLabel from './FacetLabel'
import RadioButtons from './RadioButtons'
import StayUpdated from './StayUpdated'

const StyledDiv = styled.div`
    display: grid;
    margin-left: 2rem;
    margin-right: 2rem;
`

const StyledForm = styled.form`
    background-color: ${color.darkBlue};
`

const TwoColumnGrid = styled.div`
    display: grid;
    grid-template-columns: 45% 45%;
    grid-gap: 5%;
    justify-content: center;
    text-align: center;
`

export default function ContactGrid() {
    return (
        <StyledDiv>
            <h2>Want To Get In Touch?</h2>
            <p>We'd love to hear from you! Contact us using the form below and we'll be happy to help answer your questions.</p>
            <h4>Get in touch</h4>
            <TwoColumnGrid>
                <div>
                    <StyledForm onSubmit={(e) => e.preventDefault()}>
                        <br />
                        <TwoColumnGrid>
                            <div>
                                <FacetLabel text="First name" />
                                {/* @ts-ignore */}
                                <FacetInput colorStyle={electricColor} />
                            </div>
                            <div>
                                <FacetLabel text="Last name" />
                                {/* @ts-ignore */}
                                <FacetInput colorStyle={electricColor} />
                            </div>
                        </TwoColumnGrid>
                        <br />
                        <TwoColumnGrid>
                            <div>
                                <FacetLabel text="Email" />
                                {/* @ts-ignore */}
                                <FacetInput colorStyle={electricColor} />
                            </div>
                            <div>
                                <FacetLabel text="Company name" />
                                {/* @ts-ignore */}
                                <FacetInput colorStyle={electricColor} />
                            </div>
                        </TwoColumnGrid>
                        <br />
                        <TwoColumnGrid>
                            <div>
                                <FacetLabel text="Do you currently use Facet?" />
                                <br />
                                <br />
                                <RadioButtons />
                            </div>
                        </TwoColumnGrid>
                        <br />
                        <div style={{}}></div>
                        <div style={{ padding: '1rem' }}>
                            <FacetLabel text="Message" />
                            <br />
                            <br />
                            <TextField
                                style={{ backgroundColor: color.ice, width: '100%' }}
                                id="filled-multiline-static"
                                multiline
                                rows={7}
                                variant="filled"
                            />
                            <br />
                            <br />
                            {/* @ts-ignore */}
                            <FacetButton colorButtonStyle={electricBtnColor} style={{ width: '20%' }} text="Submit" />
                        </div>
                    </StyledForm>
                    <br />
                    <div style={{ padding: '.5rem' }}>
                        <StayUpdated />
                    </div>
                </div>
                <div>
                    <img src="/contact.svg" alt="Facet" />
                </div>
            </TwoColumnGrid>
            <br />
            <br />
            <br />

            <br />
        </StyledDiv>
    )
}