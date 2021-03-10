import React from 'react'
import styled from 'styled-components'
import StackSelectCard from './StackSelectCard'

const Grid = styled.div`
    display: grid;
    justify-content: center;
    text-align: center;
    gap: 5%;
`

const DocumentationSelection = () => {
    return <>
        <Grid>
            <div style={{
                gridColumn: '1 / 2',
                gridRow: '1'
            }}>
                <StackSelectCard logo='../../images/js_logo.png' label="JavaScript" />
            </div>
            <div style={{
                gridColumn: '2 / 2',
                gridRow: '1'
            }}>
                <StackSelectCard logo='../../images/java_logo.png' label="Java" />
            </div>
        </Grid>
    </>
}

export default DocumentationSelection;