import React, { useState } from 'react';
import ExampleWebsite from './ExampleWebsite';
import styled from 'styled-components';

export default function () {
    return <div id="fixed-container">
        <StyledDiv>
            <ExampleWebsite />
        </StyledDiv>
    </div>
}


const StyledDiv = styled.div`
 `;
