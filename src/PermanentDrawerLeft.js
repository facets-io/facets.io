import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import FixedContainer from './FixedContainer';
import ToolBox from './ToolBox';
import { Button } from '@material-ui/core';
import logo from './facet.png';

const StyledDiv1 = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  text-align: left;
`;

const StyledDiv = styled.div`
text-align: center;
`;


const LeftDiv = styled.div`
    margin-top: 1rem;
`;

const RightDiv = styled.div`
    border-left: .2rem solid black;
`;

const onDeployHandler = () => {
  console.log('HIDING IDs', window.hiddenElementsArray);
  //TODO persist ...
}

const drawerWidth = 70;

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
            Facets Configuration
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
         <List>
          {['Facetize'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <img src={logo} width="13%" /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
       </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <StyledDiv className="App">
          <StyledDiv1>
            <LeftDiv>
              <FixedContainer />
            </LeftDiv>
            <RightDiv>
              <ToolBox />
            </RightDiv>
          </StyledDiv1>
          <Button variant="contained" size='large' color="primary" className='btn-block' onClick={onDeployHandler}>⚔️ D E P L O Y ⚔️</Button>
        </StyledDiv>
      </main>
    </div>
  );
}