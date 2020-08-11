import React, { useState, useEffect, useContext } from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { Button } from '@material-ui/core';
import AppContext from './AppContext';
import { useSnackbar } from 'notistack';

window.hiddenElementsArray = [];

const StyledDiv = styled.div`
  margin-left: 1rem;
`;

function ToolBox() {
    const { enqueueSnackbar } = useSnackbar();

    const { addedElements, setAddedElements, newlyAddedFacet,  canDeleteElement, setCanDeleteElement} = useContext(AppContext);

    const onAddElement = () => {

        let oldVals = addedElements.get(newlyAddedFacet);
        if (!oldVals || oldVals.length === 0) {
            oldVals = [];
        }
        if (oldVals.includes(window.selectedDOM)) {
            enqueueSnackbar(`Element "${window.selectedDOM}" has already been added in the "${newlyAddedFacet}".`, { variant: "error" });
            return;
        }
        const newVals = [...oldVals, window.selectedDOM];
        const newMap = new Map(addedElements);
        newMap.set(newlyAddedFacet, newVals);
        setCanDeleteElement(true);
        setAddedElements(newMap);
        enqueueSnackbar(`Added Element "${window.selectedDOM}" in the "${newlyAddedFacet}"!`, { variant: "success" });
    }

    const onDeleteElement = () => {
        const oldVals = addedElements.get(newlyAddedFacet);
        const newVals = oldVals.filter(element => element !== window.selectedDOM);
        const newMap = new Map(addedElements);
        newMap.set(newlyAddedFacet, newVals);
        setCanDeleteElement(false);
        setAddedElements(newMap);
        enqueueSnackbar(`Deleted Element "${window.selectedDOM}" from "${newlyAddedFacet}"!`, { variant: "success" });
    }

    useEffect(() => {

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
            const valuesArr = addedElements.get(newlyAddedFacet);
            if (valuesArr && valuesArr.includes(id)) {
                setCanDeleteElement(true);
            } else {
                setCanDeleteElement(false);
            }
            const index = window.hiddenElementsArray.indexOf(id);
            if (index > -1) {
                setShouldDisplay(true);
            } else {
                setShouldDisplay(false);
            }
        }
    }, [addedElements, newlyAddedFacet, setCanDeleteElement]);

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
        <br></br>
        <Button variant="contained" size='large' color="primary" className='btn-block' onClick={onAddElement}>Add Element</Button>
        <Button variant="contained" size='large' color="secondary" className='btn-block' onClick={onDeleteElement} disabled={!canDeleteElement}>Delete Element</Button>
    </StyledDiv>
}

export default ToolBox;