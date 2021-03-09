import React from 'react'
import styled from 'styled-components'
import StackSelectCard from './StackSelectCard'

const Grid = styled.div`
    display: grid;
    grid-template-columns: 45% 45%;
    gap: 5%;
`

const DocumentationSelection = () => {
    return <>
        <Grid>
            <div>
                <StackSelectCard logo='../../images/js_logo.png' label="JavaScript" />
            </div>
            <div>
                <StackSelectCard logo='../../images/java_logo.png' label="Java" />
            </div>
        </Grid>
    </>
}

export default DocumentationSelection;