import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from '@material-ui/core';
import PermanentDrawerLeft from './PermanentDrawerLeft';
import { useSnackbar } from 'notistack';


const StyledDiv = styled.div`
  text-align: center;
`;

function App() {
  const { enqueueSnackbar } = useSnackbar();

  const onDeployHandler = () => {
    console.log('HIDING IDs', window.hiddenElementsArray);
    fetch('https://drdsebmbv2.execute-api.us-west-2.amazonaws.com/live/facet/mene', {
      method: 'post',
      body: JSON.stringify({ "site": "mene10", "facet": [{ "name": "myfacet", "enabled": "false", "id": ["hello", "world", "test"] }] })
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log('successful response', data)
    });
    enqueueSnackbar(`Facets Deployed!`, { variant: "success" });
  }

  return (
    <StyledDiv className="App">
      <PermanentDrawerLeft></PermanentDrawerLeft>
      <Button variant="contained" size='large' color="primary" className='btn-block' onClick={onDeployHandler}>⚔️ D E P L O Y ⚔️</Button>
    </StyledDiv>
  );
}


export default App;
