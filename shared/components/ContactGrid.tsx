import { useState } from 'react'
import { Input, TextField, TextareaAutosize } from '@material-ui/core'
import styled from 'styled-components'
import { color, responsiveThresholds, snackbar } from '../constant'
import FacetButton, { primaryBtnColor } from './FacetButton'
import FacetInput, { electricColor } from './FacetInput'
import FacetLabel from './FacetLabel'
import StayUpdated from './StayUpdated'
import { useForm } from 'react-hook-form'
import FacetFormError from './FacetFormError'
import { useSnackbar } from 'notistack'
import JsonAnimation from "./JsonGIF";
import mock_site from "../../public/paper_plane_contacts.json";
import useMedia from '../hooks/useMedia'

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: 35% 35%;
    grid-gap: 5%;
    justify-content: center;
    align-items: center;

    @media (max-width: 1564px) {
        grid-template-columns: 100%;
        justify-content: center;
        align-items: center;
    }
    
`

const StyledDiv2 = styled.div`
    padding-left: 7.5%;
`

const StyledForm = styled.form`
    background-color: ${color.secondaryGray};
    width: 30rem;
    padding: .5rem;

    @media (max-width: 720px) {
        width: 100%;
    }
`

const TwoColumnGrid = styled.div`
    display: grid;
    grid-template-columns: 45% 45%;
    grid-gap: 5%;
    justify-content: center;
`

export default function ContactGrid() {
    const { enqueueSnackbar } = useSnackbar();
    const { register, errors, handleSubmit, watch } = useForm({})
    const [submitting, setSubmitting] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [message, setMessage] = useState('')
    const [isCurrentUser, setIsCurrentUser] = useState(false)

    const reset = () => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setCompanyName('')
        setMessage('')
        setIsCurrentUser(false)
    }

    const onSubmit = async data => {
        fetch('https://api.facet.run/notification', {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => console.log(data));
        try {
            enqueueSnackbar({
                message: 'Thank you!  We will get back to with soon.',
                variant: snackbar.success.text
            })
            reset()
        } catch (error) {
            setSubmitting(false)
        }
    };

    const media = useMedia();
    const shouldDisplayJSON = media === responsiveThresholds.xxLarge

    return (
        <div>
            <StyledDiv2>
                <div>
                    <FacetLabel fontWeight={700} fontSize={"42px"} text="Want To Get In Touch?" />
                    <br />
                    <br />
                    <FacetLabel fontWeight={300} fontSize={"20px"} text="We’d love to hear from you! Contact us using the form below and we’ll be happy to answer your questions." />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </StyledDiv2>
            <StyledDiv>


                <div style={{ textAlign: "left", display: "grid", justifyContent: "center" }}>
                    <StyledForm onSubmit={(e) => e.preventDefault()}>
                        <Input style={{ display: "none" }} value="General Inquiry" name={"subject"} inputRef={register()} />
                        <br />
                        <TwoColumnGrid>
                            <div>
                                <FacetLabel text="First name" color={color.black} />
                                <div style={{ marginTop: '.5rem' }}>
                                    <FacetInput
                                        name="firstName"
                                        value={firstName}
                                        onChange={(e) => { setFirstName(e.target.value) }}
                                        inputRef={register()}
                                        /*@ts-ignore*/
                                        colorStyle={electricColor}
                                    />
                                </div>
                            </div>
                            <div>
                                <FacetLabel text="Last name" color={color.black} />
                                <div style={{ marginTop: '.5rem' }}>
                                    <FacetInput
                                        name="lastName"
                                        value={lastName}
                                        onChange={(e) => { setLastName(e.target.value) }}
                                        inputRef={register()}
                                        /*@ts-ignore*/
                                        colorStyle={electricColor} />
                                </div>
                                {errors && errors.lastname && <FacetFormError role="alert" text={errors.lastname.message}></FacetFormError>}
                            </div>
                        </TwoColumnGrid>
                        <br />
                        <TwoColumnGrid>
                            <div>
                                <FacetLabel text="Email*" color={color.black} />
                                <div style={{ marginTop: '.5rem' }}>
                                    <FacetInput
                                        name="contact"
                                        value={email}
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        inputRef={register({
                                            required: 'Please specify an email',
                                            pattern: {
                                                value: /\S+@\S+\.\S+/,
                                                message: 'Entered value does not match email format',
                                            },
                                        })}
                                        /*@ts-ignore*/
                                        colorStyle={electricColor} />
                                </div>
                                <br />
                                {errors && errors.email && <FacetFormError role="alert" text={errors.email.message}></FacetFormError>}
                            </div>
                            <div>
                                <FacetLabel text="Company name" color={color.black} />
                                <div style={{ marginTop: '.5rem' }}>
                                    <FacetInput
                                        value={companyName}
                                        name="company"
                                        inputRef={register()}
                                        onChange={(e) => { setCompanyName(e.target.value) }}
                                        /*@ts-ignore*/
                                        colorStyle={electricColor} />
                                </div>
                            </div>
                        </TwoColumnGrid>
                        <div style={{ padding: '1rem', paddingTop: '0' }}>
                            <FacetLabel text="Message" color={color.black} />
                            <br />
                            <br />
                            <TextField
                                name="message"
                                size="small"
                                style={{ backgroundColor: color.white, width: '100%' }}
                                id="filled-multiline-static"
                                multiline
                                rows={8}
                                variant="filled"
                                value={message}
                                onChange={(e) => { setMessage(e.target.value) }}
                                inputRef={register()}
                                InputProps={{
                                    style: { backgroundColor: color.white },
                                    disableUnderline: true
                                }}
                            />
                            <br />
                            <br />
                            <FacetButton onClick={handleSubmit(onSubmit)} colorButtonStyle={primaryBtnColor} style={{ width: '100%' }} text="Submit" />
                        </div>
                    </StyledForm>
                </div>
                {shouldDisplayJSON ? <div>
                    <JsonAnimation animationData={mock_site} style={{ borderRadius: "3rem", overflow: "hidden", height: "500px", width: undefined, boxShadow: undefined }} />
                </div> : null}
            </StyledDiv>
            <br />
            <br />
        </div>
    )
}