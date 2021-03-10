import React from 'react'
import styled from 'styled-components'
import StackSelectCard from './StackSelectCard'

const Grid = styled.div`
    display: grid;
    justify-content: center;
    text-align: center;
    gap: 5%;
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
                gridColumn: '1 / 2',
                gridRow: '1'
            }}>
                <StackSelectCard linkUrl='/documentation/javascript' logo='../../images/js_logo.png' label="JavaScript" />
            </div>
            <div style={{
                gridColumn: '2 / 2',
                gridRow: '1'
            }}>
                <StackSelectCard width="80rem" logo='../../images/java_logo.png' label="Java" />
            </div>
        </Grid>
    </>
}

export default DocumentationSelection;