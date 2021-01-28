import { useState } from 'react'
import { TextField } from '@material-ui/core'
import styled from 'styled-components'
import { color, snackbar } from '../constant'
import FacetButton, { primaryBtnColor } from './FacetButton'
import FacetInput, { electricColor } from './FacetInput'
import FacetLabel from './FacetLabel'
import StayUpdated from './StayUpdated'
import { useForm } from 'react-hook-form'
import FacetFormError from './FacetFormError'
import { useSnackbar } from 'notistack'
import JsonAnimation from "./JsonGIF";
import mock_site from "../../public/paper_plane_contacts.json";

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: 35% 35%;
    grid-gap: 5%;
    justify-content: center;
    align-items: center;
`

const StyledDiv2 = styled.div`
    padding-left: 7.5%;
`

const StyledForm = styled.form`
    background-color: ${color.secondaryGray};
    width: 525px;
    padding: .5rem;
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

    const onSubmit = async (data) => {
        setSubmitting(true)
        // HTTP call goes here ...
        try {
            enqueueSnackbar({
                message: 'Message sent! A member of our team will contact you shortly.',
                variant: snackbar.success.text
            })
            reset()
        } catch (error) {
            setSubmitting(false)
        }
    }

    // @ts-ignore
    return (
        <div>
            <StyledDiv2>
            <div>
            <FacetLabel fontWeight={700} fontSize={"42px" } text="Want To Get In Touch?"/>
            <br />
            <br />
            <FacetLabel fontWeight={300} fontSize={"20px" } text="We’d love to hear from you! Contct us using the form below and we’ll be happy to answer your questions." />
            <br />
            <br/>
                <br/>
                <br/>
                <br/>
            </div>
            </StyledDiv2>
        <StyledDiv>


            <div style={{textAlign:"left",display:"grid",justifyContent:"left"}}>
                    <StyledForm onSubmit={(e) => e.preventDefault()}>
                        <br />
                        <TwoColumnGrid>
                            <div>
                                <FacetLabel text="First name" color={color.black}/>
                                <div style={{ marginTop: '.5rem' }}>
                                    <FacetInput
                                        name="firstname"
                                        value={firstName}
                                        onChange={(e) => { setFirstName(e.target.value) }}
                                        /*@ts-ignore*/
                                        colorStyle={electricColor}
                                    />
                                </div>
                            </div>
                            <div>
                                <FacetLabel text="Last name" color={color.black}/>
                                <div style={{ marginTop: '.5rem' }}>
                                    <FacetInput
                                        name="lastname"
                                        value={lastName}
                                        onChange={(e) => { setLastName(e.target.value) }}
                                        /*@ts-ignore*/
                                        colorStyle={electricColor} />
                                </div>
                                {errors && errors.lastname && <FacetFormError role="alert" text={errors.lastname.message}></FacetFormError>}
                            </div>
                        </TwoColumnGrid>
                        <br />
                        <TwoColumnGrid>
                            <div>
                                <FacetLabel text="Email*" color={color.black}/>
                                <div style={{ marginTop: '.5rem' }}>
                                    <FacetInput
                                        name="email"
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
                                <FacetLabel text="Company name" color={color.black}/>
                                <div style={{ marginTop: '.5rem' }}>
                                    <FacetInput
                                        value={companyName}
                                        onChange={(e) => { setCompanyName(e.target.value) }}
                                        /*@ts-ignore*/
                                        colorStyle={electricColor} />
                                </div>
                            </div>
                        </TwoColumnGrid>
                        <div style={{ padding: '1rem', paddingTop: '0'}}>
                            <FacetLabel text="Message" color={color.black}/>
                            <br />
                            <br />
                            <TextField
                                style={{ backgroundColor:  color.white, width: '100%' }}
                                id="filled-multiline-static"
                                multiline
                                rows={16}
                                variant="filled"
                                value={message}
                                onChange={(e) => { setMessage(e.target.value) }}
                                InputProps={{
                                    style: {backgroundColor: color.white},
                                    disableUnderline: true
                                }}
                            />
                            <br />
                            <br />
                            <FacetButton onClick={handleSubmit(onSubmit)} colorButtonStyle={primaryBtnColor} style={{ width: '100%' }} text="Submit" />
                        </div>
                    </StyledForm>
                </div>
            <div>
                <JsonAnimation animationData={mock_site} style={{borderRadius: "3rem", overflow:"hidden", height: "500px", width: undefined, boxShadow: undefined}}/>
            </div>
        </StyledDiv>
        </div>
    )
}