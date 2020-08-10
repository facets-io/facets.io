import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from '@material-ui/core';
import PermanentDrawerLeft from './PermanentDrawerLeft';

const StyledDiv = styled.div`
  text-align: center;
`;

const onDeployHandler = () => {
  console.log('HIDING IDs', window.hiddenElementsArray);
}

function App() {

  return (
    <StyledDiv className="App">
      <PermanentDrawerLeft></PermanentDrawerLeft>
      <Button variant="contained" size='large' color="primary" className='btn-block' onClick={onDeployHandler}>⚔️ D E P L O Y ⚔️</Button>
    </StyledDiv>

  );
}


export default App;
