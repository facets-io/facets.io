import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import FixedContainer from './FixedContainer';
import ToolBox from './ToolBox';
import { Button } from '@material-ui/core';
import logo from './facet.png';
import PermanentDrawerLeft from './PermanentDrawerLeft';

const StyledDiv = styled.div`
text-align: center;
`;


const LeftDiv = styled.div`
    margin-top: 1rem;
`;

const RightDiv = styled.div`
    border-left: .2rem solid black;
`;

const onDeployHandler = () => {
  console.log('HIDING IDs', window.hiddenElementsArray);
  //TODO persist ...
}

function App() {

  const StyledDiv1 = styled.div`
    display: grid;
    grid-template-columns: 80% 20%;
    text-align: left;
`;

  return (
    <StyledDiv className="App">
      <PermanentDrawerLeft></PermanentDrawerLeft>
    </StyledDiv>
  );
}


export default App;
