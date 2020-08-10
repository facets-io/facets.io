import React from 'react';
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

const StyledDiv1 = styled.div`
  display: grid;
  grid-template-columns: 10% 70% 15%;
  text-align: left;
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

const onDeployHandler = () => {
  console.log('HIDING IDs', window.hiddenElementsArray);
  //TODO persist ...
}

const drawerWidth = 0;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Facet Configuration
          </Typography>
        </Toolbar>
      </AppBar>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <StyledDiv className="App">
          <StyledDiv1>
            <GmailTreeView />
            <LeftDiv>
              <FixedContainer />
            </LeftDiv>
            <RightDiv>
              <ToolBox />
            </RightDiv>
          </StyledDiv1>
        </StyledDiv>

      </main>
    </div>
  );
}