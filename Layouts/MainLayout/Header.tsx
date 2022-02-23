import React from 'react'
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
  Hidden,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box
} from '@mui/material';
import Image from 'next/image';
import Logo from '../../assets/images/logo.svg'
import Menu from '../../assets/Icons/menu.svg'
import Close from '../../assets/Icons/close.svg'
import Link from 'next/link'
import { useState } from 'react';

const Header = () => {
  const [drawer, setDrawer] = useState(false);

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'secondary.main' }}>
      <Button href="#main-content" component="a" sx={{ position: 'absolute', transform: 'translateY(-120%)', '&:focus': { transform: 'translateY(0)' } }}>
        Skip Navigation
      </Button>
      <Container maxWidth="lg">
        <Toolbar sx={{ p: [0, 0, 0, 0, 0], display: 'flex', justifyContent: 'space-between' }}>
          <Link href="/">
            <Button
              variant="contained"
<<<<<<< Updated upstream
              startIcon={<Image src={Logo} width={45} height={45} />}
              sx={{ bgcolor: 'transparent', boxShadow: 'none', m: 0, p: 0, '&:hover': { boxShadow: 'none', background: 'transparent' } }}
=======
<<<<<<< HEAD
              startIcon={<Image src={Logo} width={45} height={45} priority />}
              sx={{bgcolor: 'transparent', boxShadow: 'none', m: 0, p: 0, '&:hover': {boxShadow: 'none', background: 'transparent'}}}
=======
              startIcon={<Image src={Logo} width={45} height={45} />}
              sx={{ bgcolor: 'transparent', boxShadow: 'none', m: 0, p: 0, '&:hover': { boxShadow: 'none', background: 'transparent' } }}
>>>>>>> 19ce4a2ae9dad38aa38281a9fe6442e9c0461b9c
>>>>>>> Stashed changes
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
            <Drawer anchor="left" open={drawer} onClose={() => setDrawer(prevState => !prevState)} PaperProps={{ style: { width: '100%', backgroundColor: '#272c3a', backgroundImage: 'none' } }}>
              <Container maxWidth="lg">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1, borderBottom: 1, borderColor: 'secondary.light' }}>
                  <Link href="/">
                    <Button
                      variant="contained"
                      startIcon={<Image src={Logo} width={45} height={45} />}
                      sx={{ bgcolor: 'transparent', boxShadow: 'none', m: 0, p: 0, '&:hover': { boxShadow: 'none', background: 'transparent' } }}
                      disableRipple
                      onClick={() => setDrawer(prevState => !prevState)}
                    >
                      <Typography variant="h6" component="h1" color="textPrimary">
                        Daniel Pedersen
                      </Typography>
                    </Button>
                  </Link>
                  <IconButton color="inherit" aria-label="Close menu" onClick={() => setDrawer(prevState => !prevState)}><Image src={Close} width={35} height={35} alt="menu" /></IconButton>
                </Box>

                <List component="nav" aria-labelledby="menu list">
                  <Link href="/om-mig">
                    <ListItem onClick={() => setDrawer(prevState => !prevState)}>
                      <ListItemText primary="Om mig" />
                    </ListItem>
                  </Link>
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
