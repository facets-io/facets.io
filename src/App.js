import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import FixedContainer from './FixedContainer';
import ToolBox from './ToolBox';
import { Button } from 'react-bootstrap';

const LeftDiv = styled.div`
  float: left;
  width: 70rem;
  margin-right: 8px;
  margin: 14px
`;

const RightDiv = styled.div`
    margin-left: 108px;
`;

const onDeployHandler = () => {
  console.log('HIDING IDs', window.hiddenElementsArray);
  //TODO persist ...
}

function App(hiddenElementsArray) {
  console.log('hiddenElementsArray',hiddenElementsArray)
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
        onChange={(e) => {
          window.isEditMode = !editMode;
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
      <Button size='lg' className='btn-block' onClick={onDeployHandler}>🚀 D E P L O Y 🚀</Button>
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
