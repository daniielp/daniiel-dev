import { Container, Grid, Link } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles'
import TextBundle from './Typography/TextBundle'
import React, { useState } from 'react'

const useStyles = makeStyles((theme: Theme) => ({
    grow: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        backgroundColor: theme.palette.secondary.dark,

        [theme.breakpoints.down('md')]: {
            paddingTop: theme.spacing(5),
            paddingBottom: theme.spacing(5),
        }
    },
}))

const Hero = () => {
    const classes = useStyles();
    const [index, setIndex] = useState(0);

    return (
        <section className={classes.grow}>
            <Container maxWidth="lg">

                <Grid container spacing={5}>
                    <Grid item md={6}>
                        <TextBundle title="Hej - Mit navn er Daniel Pedersen" subtitle="Om mig" text="Med en kombination af uddannelsen som webudvikler, og med et skarpt øje for design og UI/UX, skaber vækst og gør mig i stand til at arbejde helhjertet med frontend-development. På den måde styrker jeg brandets position med at være de bedste når det kommer til frontend-development, og samtidig skaber værdifulde resultater, som i sidste ende giver bedre købeklare leads." />
                        <Link href="/omkring" underline="hover">
                            Min historie
                        </Link>
                    </Grid>
                    <Grid item md={6}>
                        
                    </Grid>
                </Grid>

            </Container>
        </section>
    );
}

export default Hero
