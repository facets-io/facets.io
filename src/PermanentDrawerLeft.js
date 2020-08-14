import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import FixedContainer from './FixedContainer';
import ToolBox from './ToolBox';
import GmailTreeView from './GmailTreeView';
import IconButton from '@material-ui/core/IconButton';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import AppContext from './AppContext';
import Button from '@material-ui/core/Button';
import Avatar from './Avatar';
import $ from 'jquery';

const StyledBtn = styled(Button)`
  margin-left: 1rem
`;

const access = () => {
  console.log('RUNNING SCRIPT @LOAD')
  var iframe = document.getElementById("fixed-container");
  var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
  innerDoc.querySelectorAll('*').forEach(e => {
    e.addEventListener("mouseenter", function (event) {
      // highlight the mouseenter target
      $(this).css('border', '1px solid black');
      $(this).css('cursor', 'pointer');
      event.preventDefault();
      event.stopPropagation();

      // reset the color after a short delay
      setTimeout(function () {
        event.target.style.color = "purple";
      }, 500);
    }, false);
    e.addEventListener("mouseleave", function (event) {
      // highlight the mouseenter target
      $(this).css('border', 'none');
      event.preventDefault();
      event.stopPropagation();
    }, false);
    e.addEventListener("click", function (event) {
      console.log('@CLICK', event)
      if (!event.target.id) return;
      window.selectedDOM = event.target.id;
      console.log('selectedDOM: ', window.selectedDOM);
      // onAddElement();
    }, false);
  });
}

// const onAddElement = () => {

//   let oldVals = addedElements.get(newlyAddedFacet);

//   if (!oldVals || oldVals.length === 0) {
//     oldVals = [];
//   }
//   if (oldVals.includes(window.selectedDOM)) {
//     // enqueueSnackbar(`Element "${window.selectedDOM}" has already been added in the "${newlyAddedFacet}".`, { variant: "error" });
//     return false;
//   }
//   const newVals = [...oldVals, window.selectedDOM];
//   const newMap = new Map(addedElements);
//   newMap.set(newlyAddedFacet, newVals);
//   setAddedElements(newMap);
//   // enqueueSnackbar(`Added Element "${window.selectedDOM}" in the "${newlyAddedFacet}"!`, { variant: "success" });
// }

const StyledDiv1 = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  text-align: left;
  margin: 1rem;
`;

const StyledDiv = styled.div`
  text-align: center;
`;

const RightDiv = styled.div`
    border-left: .2rem solid black;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const StyledIframe = styled.iframe`
  width: 100%;
  height: 40rem;
`;

export default function PermanentDrawerLeft() {

  const [isEdit, setIsEdit] = useState(true);
  const { url, setUrl } = useContext(AppContext);
  const { isAddingFacet, addedFacets, setAddedElements, newlyAddedFacet, setNewlyAddedFacet,
    addedElements, setCanDeleteElement } = useContext(AppContext);

  const handleEditLiveChange = (e, newAlignment) => {
    setIsEdit(newAlignment);
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              Facet Configuration
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              URL: <input onChange={(e) => { setUrl(e.target.value) }} value={url} type="text" name="name" />
              <ToggleButtonGroup
                value={isEdit}
                exclusive
                aria-label="text alignment" >
                <ToggleButton style={{ marginLeft: "1rem" }} selected value={true} aria-label="left aligned">
                  <EditIcon style={{ color: 'white' }}></EditIcon>
                </ToggleButton>
                <ToggleButton style={{ marginRight: "1rem" }} value={false} aria-label="centered">
                  <VisibilityRoundedIcon style={{ color: 'white' }}></VisibilityRoundedIcon>
                </ToggleButton>
                <StyledBtn variant="contained" size='large' color="primary" >Load</StyledBtn>
              </ToggleButtonGroup>

            </Typography>

            <Avatar />
          </Toolbar>
        </AppBar>
      </div>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <StyledDiv className="App">
          <StyledDiv1>
            <GmailTreeView />
            <StyledIframe id='fixed-container' title={'Facetizer'} src={'https://proxy.facet.ninja/facet-ninja/proxy/?facet-ninja-proxy-origin=' + url} onLoad={access} />
            <RightDiv>
            </RightDiv>
          </StyledDiv1>
        </StyledDiv>

      </main>
    </div >
  );
}