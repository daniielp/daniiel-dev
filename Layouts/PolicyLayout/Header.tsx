import React from 'react'
import { AppBar, Avatar, Container, Toolbar, Typography, Button, Theme, Stack, Link } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import Image from 'next/image';
import Logo from '../../assets/images/logo.svg'
import NextLink from 'next/link';
import {useRouter} from 'next/router'
import clsx from 'clsx'

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
  },
  link: {
    color: theme.palette.common.white,
    textDecoration: 'none',
  },
  linkActive: {
    color: theme.palette.primary.main,
  }
}));

const Header = (props: any) => {
  const classes = useStyles();
  const { pages } = props;
  const router = useRouter();

  const path = "/policies"

  return (
    <AppBar position="sticky" className={classes.background}>
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <NextLink href="/">
            <Button
              variant="contained"
              startIcon={<Image src={Logo} width={45} height={45} />}
              className={classes.clicableButton}
              disableRipple
            >
              <Typography variant="h6" component="h1" color="textPrimary">
                Daniel Pedersen - Privatliv & Betingelser
              </Typography>
            </Button>
          </NextLink>
        </Toolbar>
        <Toolbar className={classes.toolbar}>
          <Stack direction="row" spacing={2}>
            <Link href="/policies" className={clsx(classes.link, router.pathname === path ? classes.linkActive : "")}>Oversigt</Link>
            <Link href="/policies/brugeraftale" className={clsx(classes.link, router.pathname === path + "/brugeraftale" ? classes.linkActive : "")}>Brugeraftale</Link>
            <Link href="/policies/privatlivspolitik" className={clsx(classes.link, router.pathname === path + "/privatlivspolitik" ? classes.linkActive : "")}>Privatlivspolitik</Link>
            <Link href="/policies/cookies" className={clsx(classes.link, router.pathname === path + "/cookies" ? classes.linkActive : "")}>Cookies</Link>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
