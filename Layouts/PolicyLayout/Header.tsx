import React from 'react'
import { AppBar, Avatar, Container, Toolbar, Typography, Button, Theme, Stack, Link } from '@mui/material';
import Image from 'next/image';
import Logo from '../../assets/images/logo.svg'
import NextLink from 'next/link';
import {useRouter} from 'next/router'


const Header = () => {
  const router = useRouter();

  const path = "/policies"

  return (
    <AppBar position="sticky" sx={{bgcolor: 'secondary.main'}}>
      <Container maxWidth="lg">
        <Toolbar sx={{p: [0,0,0,0,0], display: 'flex', justifyContent: 'space-between'}}>
          <NextLink href="/">
            <Button
              variant="contained"
              startIcon={<Image src={Logo} width={45} height={45} />}
              sx={{bgcolor: 'transparent', boxShadow: 'none', m: 0, p: 0, '&:hover': {boxShadow: 'none', background: 'transparent'}}}
              disableRipple
            >
              <Typography variant="h6" component="h1" color="textPrimary">
                Daniel Pedersen - Privatliv & Betingelser
              </Typography>
            </Button>
          </NextLink>
        </Toolbar>
        <Toolbar sx={{p: [0,0,0,0,0], display: 'flex', justifyContent: 'space-between'}}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Link href="/policies" sx={router.pathname === path ? {color: 'primary.main', textDecoration: 'none'} : {color: (theme: Theme) => theme.palette.common.white, textDecoration: 'none'}}>Oversigt</Link>
            <Link href="/policies/brugeraftale" sx={router.pathname === path + "/brugeraftale" ? {color: 'primary.main', textDecoration: 'none'} : {color: (theme: Theme) => theme.palette.common.white, textDecoration: 'none'}}>Brugeraftale</Link>
            <Link href="/policies/privatlivspolitik" sx={router.pathname === path + "/privatlivspolitik" ? {color: 'primary.main', textDecoration: 'none'} : {color: (theme: Theme) => theme.palette.common.white, textDecoration: 'none'}}>Privatlivspolitik</Link>
            <Link href="/policies/cookies" sx={router.pathname === path + "/cookies" ? {color: 'primary.main', textDecoration: 'none'} : {color: (theme: Theme) => theme.palette.common.white, textDecoration: 'none'}}>Cookies</Link>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
