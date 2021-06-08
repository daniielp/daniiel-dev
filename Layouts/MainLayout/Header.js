import React from 'react'
import { AppBar, Avatar, Container, makeStyles, Toolbar, Typography, Button } from '@material-ui/core';
import Logo from '../../assets/images/logo.svg'
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    // marginRight: theme.spacing(2),
  },
  logo: {
    width: 25,
  },
  clicableButton: {
    background: 'transparent',
    boxShadow: 'none',
    margin: 0,
    padding: 0,

    '&:hover': {
      boxShadow: 'none',
      background: 'transparent',
    }
  },
  toolbar: {
    padding: 0,
  }
}));

const Header = (props) => {
  const classes = useStyles();
  const { pages } = props;

  return (
    <AppBar position="sticky" color="secondary">
      <Container maxWidth="xl">
        <Toolbar className={classes.toolbar}>
          <Link href="/">
            <Button
              variant="contained"
              startIcon={<img className={classes.logo} src={Logo} />}
              className={classes.clicableButton}
              disableRipple
            >
              <Typography variant="h6" component="h1" color="textPrimary">
                Daniel Pedersen
          </Typography>
            </Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
