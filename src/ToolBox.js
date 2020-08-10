import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

window.hiddenElementsArray = [];

const StyledDiv = styled.div`
  margin-left: 1rem;
`;

function ToolBox() {

    useEffect(() => {
        window.selectedDOM = 'main';
        $('#fixed-container *').hover(
            function (e) {
                $(this).css('border', '1px solid black');
                $(this).css('cursor', 'pointer');
                e.preventDefault();
                e.stopPropagation();
                return false;
            }, function (e) {
                $(this).css('border', 'none');
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        ).click((e) => {
            if (!e.target.id) return;
            document.getElementById("ToolBoxLabel").innerHTML = `${e.target.id}`;
            window.selectedDOM = e.target.id;
            changeDisplayHide(e.target.id);
        })

        const changeDisplayHide = (id) => {
            const index = window.hiddenElementsArray.indexOf(id);
            if (index > -1) {
                window.hiddenElementsArray.splice(index, 1);
                setShouldDisplay(true);
            } else {
                setShouldDisplay(false);
            }
            $(`#${window.selectedDOM}`).css('background-color', 'unset');
        }
    }, []);

    const [isEdit, setIsEdit] = useState(true);
    const [shouldDisplay, setShouldDisplay] = useState(false);

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
            $(`#${window.selectedDOM}`).css('background-color', 'unset');
        }
        setShouldDisplay(val);
    }

    return <StyledDiv>
        <h6>URL:<input value={"http://my-website-facets.io.s3-website-us-west-2.amazonaws.com/"} type="text" name="name" disabled /></h6>
        <h6>Mode:{' '}<ToggleButtonGroup
            value={isEdit}
            exclusive
            onChange={handleEditLiveChange}
            aria-label="text alignment">
            <ToggleButton value={true} aria-label="left aligned">
                Edit
            </ToggleButton>
            <ToggleButton value={false} aria-label="centered">
                Live
            </ToggleButton>
        </ToggleButtonGroup></h6>
        <h6>Selected DOM Element: <u><label id="ToolBoxLabel"></label></u></h6>
        <div><b>Audience:</b> <select name="cars" id="cars">
            <option>Age</option>
            <option>Activity</option>
            <option>Performance</option>
            <option>Vulnerabilities</option>
        </select> </div>
        <br></br>
        <h6>
            Facet:{' '} <ToggleButtonGroup
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
        </h6>
    </StyledDiv>
}

export default ToolBox;