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

const StyledDiv1 = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  text-align: left;
  margin: 1rem;
`;

const StyledDiv = styled.div`
text-align: center;
`;

const LeftDiv = styled.div`
    ${'' /* margin-top: 1rem; */}
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

export default function PermanentDrawerLeft() {
  const { addedElements, setAddedElements, newlyAddedFacet, canDeleteElement, setCanDeleteElement } = useContext(AppContext);

  const [isEdit, setIsEdit] = useState(true);

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
              URL: <input value={"http://my-website-facets.io.s3-website-us-west-2.amazonaws.com/"} type="text" name="name" disabled />
            </Typography>
            <h6><ToggleButtonGroup
              value={isEdit}
              exclusive
              aria-label="text alignment">
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
            <LeftDiv>
              <FixedContainer />
            </LeftDiv>
            <RightDiv>
            </RightDiv>
          </StyledDiv1>
        </StyledDiv>

      </main>
    </div>
  );
}