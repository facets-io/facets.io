import FacetButton, { primaryBtnColor, primaryGrayBtnColor } from "./FacetButton";
import FacetInput from "./FacetInput";
import styled from 'styled-components';
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { snackbar } from "../constant";
import { Input } from "@material-ui/core";

const MainForm = styled.form`
    text-align: center;
    display: grid;
    grid-template-columns: 30% 20%;
    grid-gap: 2%;
    justify-content: center;
    align-items: center;
`

const CoreDiv = styled.div`
    width: 100%;
`

export default function StayUpdated() {
    const { enqueueSnackbar } = useSnackbar();
    const { register, errors, handleSubmit, watch } = useForm({})
    const [submitting, setSubmitting] = useState(false)
    const [email, setEmail] = useState('')
    const [isCurrentUser, setIsCurrentUser] = useState(false)

    const reset = () => {
        setEmail('')
        setIsCurrentUser(false)
    }

    const onSubmit = async data => {
        if (data.contact != "") {
            fetch('https://api.facet.run/notification', {
                method: 'POST',
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => console.log(data));
            try {
                enqueueSnackbar({
                    message: 'Thank you!  We will get back with you soon.',
                    variant: snackbar.success.text
                });
                reset();
            } catch (error) {
                enqueueSnackbar({
                    message: 'Apologies. Something went wrong.',
                    variant: snackbar.error.text
                });
                setSubmitting(false)
            }
        }
    };

    return (
        <CoreDiv>
            <MainForm onSubmit={(e) => e.preventDefault()}>
                <div>
                    <FacetInput extraStyle={{ maxWidth: "20rem" }} value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="email" name="contact" inputRef={register()} />
                </div>
                <div>
                    <FacetButton maxWidth="20rem" colorButtonStyle={primaryGrayBtnColor} onClick={handleSubmit(onSubmit)} text="Stay Updated" />
                </div>
            </MainForm>
        </CoreDiv>
    )
}