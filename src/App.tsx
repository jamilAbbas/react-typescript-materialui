import React from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

//material ui components
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
// local componant
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Navigation from "./components/Navigation";
import Signup from './pages/Signup';
import Profile from './components/Profile';
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

export default function App() {
  const classes = useStyles();




  return (
    <Router>
      <Route  exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
     {
       window.location.pathname !== "/login" &&
       window.location.pathname !== "/signup" &&
       <Navigation>
         <main className={classes.content}>
        <div className={classes.toolbar} />
              <Switch>
                <Route path="/profile" exact component={Profile}/>
                <Route path="/dashboard" exact component={Dashboard}/>
              </Switch>
       </main>
       </Navigation>
     } 
            </Router>
  );
}
