import React from 'react'
import { AppBar, Avatar, Container, IconButton, makeStyles, Toolbar, Typography, useTheme, useScrollTrigger } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    width: 25,
    Height: 25,
  }
}));

const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const {themeColor} = props;
  const { pages } = props;
  const trigger = useScrollTrigger();


  return (
    <AppBar position="sticky" color={trigger ? "default": "transparent"}>
      <Container maxWidth="lg">
      <Toolbar variant="dense">
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <Avatar variant="rounded" alt="Daniiel Pedersen" className={classes.logo} />
        </IconButton>
        <Typography variant="h5" component="h1" color="inherit">
          Daniel Pedersen
        </Typography>
      </Toolbar>

      </Container>
    </AppBar>
  )
}

export default Header
