import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import AppContext from './AppContext';
import { useSnackbar } from 'notistack';
import FloatingActionButtonSize from './FloatingActionButtonSize'

window.hiddenElementsArray = [];

const StyledDiv = styled.div`
  margin-left: 1rem;
`;

function ToolBox() {
    const { enqueueSnackbar } = useSnackbar();

    const { addedElements, setAddedElements, newlyAddedFacet, canDeleteElement, setCanDeleteElement } = useContext(AppContext);

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

    const [isEdit, setIsEdit] = useState(true);

    const handleEditLiveChange = (e, newAlignment) => {
        setIsEdit(newAlignment);
    };

    return <StyledDiv>
        <h6>Selected DOM Element: <u><label id="ToolBoxLabel"></label></u></h6>
        <div><b>Audience:</b> <select name="cars" id="cars">
            <option>Age</option>
            <option>Activity</option>
            <option>Performance</option>
            <option>Vulnerabilities</option>
        </select> </div>
        <br></br>
        <FloatingActionButtonSize disabled variant="contained" size='large' color="primary" className='btn-block' onClick={onAddElement}>Add Element</FloatingActionButtonSize>
        <FloatingActionButtonSize disabled isAdd={false} variant="contained" size='large' color="secondary" className='btn-block' onClick={onDeleteElement} >Delete Element</FloatingActionButtonSize>
    </StyledDiv>
}

export default ToolBox;