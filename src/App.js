import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import FixedContainer from './FixedContainer';
import ToolBox from './ToolBox';

const LeftDiv = styled.div`
  float: left;
  width: 70rem;
  margin-right: 8px;
  margin: 14px
`;

const RightDiv = styled.div`
    margin-left: 108px;
`;

function App() {
  const [inputURL, setInputURL] = useState('https://stripe.com/');
  const [editMode, setEditMode] = useState(true);

  const StyledDiv1 = styled.div`
 
  text-align: left;
`;

  return (
    <StyledDiv className="App">

      <StyledLabel>Load Website URL:</StyledLabel>
      <StyledInput value={"http://my-website-facets.io.s3-website-us-west-2.amazonaws.com/"} type="text" name="name" disabled />

      <StyledSwitch
        checked={false}
        onlabel='Edit'
        onstyle='danger'
        offlabel='Live'
        offstyle='success'
        size='sm'
        onChange={() => {
          setEditMode(!editMode);
        }}
      />

      <StyledDiv1>
        <LeftDiv>
          <FixedContainer />
        </LeftDiv>
        <RightDiv>
          <ToolBox />
        </RightDiv>
      </StyledDiv1>
    </StyledDiv>
  );
}

const StyledSwitch = styled(BootstrapSwitchButton)`
  
`;

const StyledInput = styled.input`
  margin: 1rem;
`;

const StyledDiv = styled.div`
text-align: center;
`;

const StyledLabel = styled.label`
  margin: 2rem;
`;

export default App;
