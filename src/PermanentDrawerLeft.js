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
import Button from '@material-ui/core/Button'

const access = (e) => {
  console.log('e', e)
  var iframe = document.getElementById("fixed-container");
  var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
  console.log(innerDoc.body);
}

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
              URL: <input value={"https://proxy.facet.ninja/?facet-ninja-proxy-origin=www.stripe.com"} type="text" name="name" />
              {'  '}<Button variant="contained" size='large' color="primary" >Load</Button>
            </Typography>
            <h6><ToggleButtonGroup
              value={isEdit}
              exclusive
              aria-label="text alignment" >
              <ToggleButton selected value={true} aria-label="left aligned">
                <EditIcon style={{ color: 'white' }}></EditIcon>
              </ToggleButton>
              <ToggleButton value={false} aria-label="centered">
                <VisibilityRoundedIcon style={{ color: 'white' }}></VisibilityRoundedIcon>
              </ToggleButton>
            </ToggleButtonGroup></h6>
          </Toolbar>
        </AppBar>
      </div>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <StyledDiv className="App">
          <StyledDiv1>
            <GmailTreeView />
            <StyledIframe id='fixed-container' title={'Facetizer'} src={'https://proxy.facet.ninja/?facet-ninja-proxy-origin=www.stripe.com'} onLoad={access} />
            <RightDiv>
            </RightDiv>
          </StyledDiv1>
        </StyledDiv>

      </main>
    </div>
  );
}