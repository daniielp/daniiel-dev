import React from 'react'
import { AppBar, Container, Toolbar, Typography, Button, Theme, Hidden, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import Image from 'next/image';
import Logo from '../../assets/images/logo.svg'
import Menu from '../../assets/Icons/menu.svg'
import Close from '../../assets/Icons/close.svg'
import Link from 'next/link'
import { useState } from 'react';

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
    display: 'flex',
    justifyContent: 'space-between'
  },
  drawer: {
    width: '100%',
    backgroundColor: theme.palette.secondary.dark,
    backgroundImage: 'none',
  },
  closeMenu: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    borderBottom: '1px solid ' + theme.palette.secondary.light
  }
}));

const Header = (props: any) => {
  const classes = useStyles();
  const { pages } = props;
  const [drawer, setDrawer] = useState(false);

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
          <Hidden smDown>
            <nav>
              <Link href="/om-mig">
                <Button variant="text" >Om mig</Button>
              </Link>
            </nav>
          </Hidden>
          <Hidden mdUp>
            <IconButton color="inherit" aria-label="Main Menu" onClick={() => setDrawer(prevState => !prevState)}><Image src={Menu} width={35} height={35} alt="menu" /></IconButton>
            <Drawer anchor="left" open={drawer} onClose={() => setDrawer(prevState => !prevState)} PaperProps={{ className: classes.drawer }}>
              <Container maxWidth="lg">
                <div className={classes.closeMenu}>
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
                  <IconButton color="inherit" aria-label="Close menu" onClick={() => setDrawer(prevState => !prevState)}><Image src={Close} width={35} height={35} alt="menu" /></IconButton>
                </div>

                <List component="nav" aria-labelledby="menu list">
                  <ListItem>
                    <ListItemText primary="Om mig" />
                  </ListItem>
                </List>

              </Container>
            </Drawer>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
