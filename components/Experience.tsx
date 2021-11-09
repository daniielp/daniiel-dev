import { Container, Grid, Tab, Tabs, Typography, Hidden, Link } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles'
import TextBundle from './Typography/TextBundle'
import React, { useState } from 'react'

const useStyles = makeStyles((theme: Theme) => ({
    grow: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),

        [theme.breakpoints.down('md')]: {
            paddingTop: theme.spacing(5),
            paddingBottom: theme.spacing(5),
        }
    },
    Indicator: {
        bottom: 'unset',
        top: 0,
        height: 10,
    },
    Tab: {
        borderTop: '10px solid' + theme.palette.grey[500],
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
    },
    breadcrumb: {
        color: theme.palette.text.primary,
        fontSize: theme.typography.h4.fontSize,
    },
    highlighted: {
        color: theme.palette.primary.main
    },
    noPadding: {
        padding: 0,
    },
    controls: {
        display: 'flex',
        paddingTop: theme.spacing(5),
    }
}))

const Hero = () => {
    const classes = useStyles();
    const [index, setIndex] = useState(0);

    return (
        <section className={classes.grow}>
            <Container maxWidth="lg">

                <Grid container spacing={5}>
                    <Grid item md={6}>
                        <TextBundle title="Virksomheder jeg har arbejdet med" subtitle="Erfaring" text="Som udvikler er det vigtigt at du har kendskab til hvad for nogle teknologier der bliver brugt ude I virksomhederne, og har et kendskab til hvordan du kan Performance Optimize, og Hvordan du kan nå I mål med de målsætninger virksomhederne sætter." />
                        <Link href="/omkring" underline="hover">
                            Se mere
                        </Link>
                    </Grid>
                    <Grid item md={6}>
                        {/* <Typography variant="h1" component="h1" >Daniel</Typography>
                        <Typography variant="h1" component="h1" color="primary" >Pedersen</Typography> */}
                    </Grid>
                </Grid>

            </Container>
        </section>
    );
}

export default Hero
