import React from 'react'
import styled from 'styled-components'
import FAQ from './FAQ'
import StackSelectCard from './StackSelectCard'

const Grid = styled.div`
    display: grid;
    justify-content: center;
    text-align: center;
    align-items: center;
    align-content: center;
    gap: 5%;
    grid-template-columns: fit-content(60%) fit-content(60%);

    @media (max-width: 550px) {
        grid-template-columns: 40% 40%;
    }
`

const CenteredDiv = styled.div`
    text-align: center;
`

const DocumentationSelection = () => {
    return <>
        <CenteredDiv>
            <h1>Facet Documentation</h1>
        </CenteredDiv>
        <br />
        <Grid>
            <div style={{
                display: 'grid',
                justifyContent: 'center'
            }}>
                <StackSelectCard linkUrl='/documentation/java' width="80rem" logo='/images/java.svg' label="Java" />
            </div>
            <div style={{
                display: 'grid',
                justifyContent: 'center'
            }}>
                <StackSelectCard linkUrl='/documentation/javascript' logo='../../images/js_logo.png' label="JavaScript" />
            </div>
            <div style={{
                display: 'grid',
                justifyContent: 'center'
            }}>
                <StackSelectCard width="80rem" logo='/images/nodejs.png' subLabel="coming soon" label="NodeJS" />
            </div>

        </Grid>
        <br />
        <div>
            <FAQ />
        </div>
    </>
}

export default DocumentationSelection;