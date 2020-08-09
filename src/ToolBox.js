import React, { useState } from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';


const StyledDiv = styled.div`
  margin-left: 1rem;
`;

const StyledInput = styled.input`
  margin: .2rem;
`;

function ToolBox() {
    const [isEdit, setIsEdit] = useState(true);
    const [shouldDisplay, setShouldDisplay] = useState(true);

    const handleEditLiveChange = (e, newAlignment) => {
        setIsEdit(newAlignment);
    };

    const handleDisplayHideChange = (e, val) => {
        if (val) {
            window.hiddenElementsArray.push(window.selectedDOM);
            $(`#${window.selectedDOM}`).css('background-color', 'red');
        } else {
            const index = window.hiddenElementsArray.indexOf(window.selectedDOM);
            if (index > -1) {
                window.hiddenElementsArray.splice(index, 1);
            }
            $(`#${window.selectedDOM}`).css('background-color', 'white');
        }
        setShouldDisplay(val);
    }

    return <StyledDiv>
        <label>URL:</label>
        <StyledInput value={"http://my-website-facets.io.s3-website-us-west-2.amazonaws.com/"} type="text" name="name" disabled />
        <ToggleButtonGroup
            value={isEdit}
            exclusive
            onChange={handleEditLiveChange}
            aria-label="text alignment"
        >
            <ToggleButton value={true} aria-label="left aligned">
                Edit
            </ToggleButton>
            <ToggleButton value={false} aria-label="centered">
                Live
            </ToggleButton>
        </ToggleButtonGroup>
        <h6>Selected DOM Element: <u><label id="ToolBoxLabel"></label></u></h6>
        <div><b>Audience:</b> <select name="cars" id="cars">
            <option>Age</option>
            <option>Activity</option>
        </select> </div>
        <br></br>
        <div>
            <ToggleButtonGroup
                className="btn btn-default w-100"
                value={shouldDisplay}
                exclusive
                onChange={handleDisplayHideChange}
                aria-label="text alignment">
                <ToggleButton value={false} aria-label="left aligned">
                    Display
            </ToggleButton>
                <ToggleButton value={true} aria-label="centered">
                    Hide
            </ToggleButton>
            </ToggleButtonGroup>
        </div>
    </StyledDiv>
}

export default ToolBox;