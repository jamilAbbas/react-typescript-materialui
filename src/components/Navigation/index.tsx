import React from 'react';
import { Link } from "react-router-dom";

//material ui components
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { Box, Button } from '@material-ui/core';


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
    authButtonGroup: {
      flex: 1,
      textAlign: "end"
    },
    authButtonTexStyles: {
      color: '#fff',
      fontWeight: 500
    }
  }),
);

export default function Navigation(props: any) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedListItem, setSelectedListItem] = React.useState(1)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleAuth = (type: string) => {
    window.location.replace(type)
  }

  const handleListItemClick: any = (e: Event, selectedListItem: any) => {
    setSelectedListItem(selectedListItem);
  }

  return (

    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Boilerplate
          </Typography>
          <Box className={classes.authButtonGroup}>

            <Button onClick={() => handleAuth('login')}
            >
              <Typography variant="body1" className={classes.authButtonTexStyles}>Login</Typography>
            </Button>
            <Button
              onClick={() => handleAuth('register')}
            >
              <Typography variant="body1" className={classes.authButtonTexStyles}>Register</Typography>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button component={Link} to="/profile"
            selected={selectedListItem === 0}
            onClick={(event: React.MouseEvent<HTMLElement>) => handleListItemClick(event, 0)}
          >
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary={"Profile"} />
          </ListItem>
          <ListItem
            button
            component={Link} to="dashboard"
            selected={selectedListItem === 1}

            onClick={(event: React.MouseEvent<HTMLElement>) => handleListItemClick(event, 1)}
          >
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary={"Dashboard"} />
          </ListItem>
          <ListItem button
            component={Link}
            to="/setting"
            selected={selectedListItem === 2}
            onClick={(event: React.MouseEvent<HTMLElement>) => handleListItemClick(event, 2)}

          >
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary={"Settings"} />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <div>
        {props.children}
      </div>

    </div>
  );
}
