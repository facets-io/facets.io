import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from '@material-ui/core';
import PermanentDrawerLeft from './PermanentDrawerLeft';
import AppProvider from './AppProvider';
import { SnackbarProvider } from "notistack";

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
      <Button variant="contained" size='large' color="primary" className='btn-block' onClick={onDeployHandler}>⚔️ D E P L O Y ⚔️</Button>
    </StyledDiv>

  );
}


export default App;
