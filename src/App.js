import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

function App() {
  const [inputURL, setInputURL] = useState('https://stripe.com/');
  const [editMode, setEditMode] = useState(true);

  return (
    <div className="App">
      <StyledDiv>
      <StyledLabel>Load Website URL:</StyledLabel>
      <StyledInput value={inputURL} onChange={e => setInputURL(e.target.value)} type="text" name="name" />
      <StyledSwitch
          checked={false}
          onlabel='Edit'
          onstyle='danger'
          offlabel='Live'
          offstyle='success'
          size='sm'
          onChange={(checked) => {
            setEditMode(!editMode);
          }}
        />
      </StyledDiv>
      <StyledDiv>
        
      </StyledDiv>
      <iframe title="website-loader" width="820rem" height="820rem" src={inputURL}></iframe>
    </div>
  );
}

const StyledSwitch = styled(BootstrapSwitchButton)`
  margin: 1rem;
`;

const StyledInput = styled.input`
  margin: 1rem;
`;

const StyledDiv = styled.div`
  margin: 2rem;
`;

const StyledLabel = styled.label`
  margin: 2rem;
`;

export default App;
