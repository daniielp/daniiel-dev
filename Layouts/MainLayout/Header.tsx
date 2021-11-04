import React from 'react'
import { AppBar, Avatar, Container, Toolbar, Typography, Button, Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import Image from 'next/image';
import Logo from '../../assets/images/logo.svg'
import Link from 'next/link'

const useStyles = makeStyles((theme: Theme) => ({
  background: {
    backgroundColor: theme.palette.secondary.main,
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

const Header = (props: any) => {
  const classes = useStyles();
  const { pages } = props;

  return (
    <AppBar position="sticky" className={classes.background}>
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <Link href="/">
            <Button
              variant="contained"
              startIcon={<Image src={Logo} width={45} height={45} />}
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
