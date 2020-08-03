import React, { useState } from 'react';
import ExampleWebsite from './ExampleWebsite';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export default function () {
    return <div>
        <div>
            <StyledDiv id="fixed-container">
                <ExampleWebsite  />
            </StyledDiv>
        </div>
    </div>
}


const StyledDiv = styled.div`
 `;
