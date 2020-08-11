import React, { useContext } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from '@material-ui/core';
import PermanentDrawerLeft from './PermanentDrawerLeft';
import { useSnackbar } from 'notistack';
import AppContext from './AppContext';

const StyledDiv = styled.div`
  text-align: center;
`;

function App() {
  const { enqueueSnackbar } = useSnackbar();
  const { addedElements } = useContext(AppContext);

  const prepareJSON = () => {

    let facet = [];
    for (let key of addedElements.keys()) {
      const id = addedElements.get(key);
      const obj = {
        name: key,
        //todo fix enabled
        enabled: false,
        id
      }
      facet.push(obj);
    }

    let body = {
      site: 'mene-prod',
      facet
    }
    return body;
  }

  const onDeployHandler = () => {
    fetch('https://api.facet.ninja/facet/mene-prod', {
      method: 'post',
      body: JSON.stringify(prepareJSON())
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log('successful response', data);
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
