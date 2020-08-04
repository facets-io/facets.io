import React from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import $ from 'jquery';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin: 1rem;
`;

function ToolBox() {
    return <StyledDiv>
        <h6>Selected DOM Element: <u><label id="ToolBoxLabel"></label></u></h6>
        <div><b>Audience:</b> <select name="cars" id="cars">
            <option value="volvo">Age</option>
            <option value="saab">Activity</option>
        </select> </div>
        <div>Target Audience:</div>
        <br></br>
        <div><BootstrapSwitchButton
            id='displayhideswitch'
            onlabel='Display'
            offlabel='Hide'
            onstyle='danger'
            offstyle='success'
            width={100}
            onChange={(e) => {
                if (e) {
                    window.hiddenElementsArray.push(window.selectedDOM);
                    $(`#${window.selectedDOM}`).css('background-color', 'red');
                } else {
                    const index = window.hiddenElementsArray.indexOf(window.selectedDOM);
                    if (index > -1) {
                        window.hiddenElementsArray.splice(index, 1);
                    }
                    $(`#${window.selectedDOM}`).css('background-color', 'lightgreen');
                }
            }}
        ></BootstrapSwitchButton></div>
    </StyledDiv>
}

export default ToolBox;