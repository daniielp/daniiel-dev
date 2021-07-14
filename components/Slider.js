import { Container, Grid, makeStyles, Typography } from '@material-ui/core'
import BodyText from './BodyText'
import TextBundle from './TextBundle'
import React from 'react'

const useStyles = makeStyles(theme => ({
    backdrop: {
        backgroundColor: theme.palette.secondary.dark,
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            height: 'auto',
        }
    },
    container: {
        height: '100%',
    },
    bold: {
        fontWeight: 'bold',
        zIndex: theme.zIndex.appBar,
    },
    alignment: {
        height: 'inherit',
        display: 'flex',
        alignContent: 'center',
    }
}))

const Slider = () => {
    const classes = useStyles();
    return (
        <section className={classes.backdrop}>
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={5} className={classes.alignment}>
                    <Grid item md={6}>
                        <TextBundle title="UI/UX Designer og Developer, baseret i Aarhus." subtitle="Introduktion" text="Med en kombination af uddannelsen som webudvikler, og med et skarpt øje for design og UI/UX, skaber vækst og gør mig i stand til at arbejde helhjertet med frontend-development. På den måde styrker jeg brandets position med at være de bedste når det kommer til frontend-development, og samtidig skaber værdifulde resultater, som i sidste ende giver bedre købeklare leads." />
                        {/* <Typography variant="h3" component="h3" color="textSecondary">- Introduktion</Typography> */}
                        {/* <Typography variant="h2" component="h2">UI/UX Designer og Developer, baseret i Aarhus.</Typography> */}
                        {/* <BodyText>Med en kombination af uddannelsen som webudvikler, og med et skarpt øje for design og UI/UX, skaber vækst og gør mig i stand til at arbejde helhjertet med frontend-development. På den måde styrker jeg brandets position med at være de bedste når det kommer til frontend-development, og samtidig skaber værdifulde resultater, som i sidste ende giver bedre købeklare leads.</BodyText> */}
                    </Grid>
                    <Grid item md={6} className={classes.bold}>
                        <Typography variant="h1" component="h1" className={classes.bold}>Daniel</Typography>
                        <Typography variant="h1" component="h1" color="primary" className={classes.bold}>Pedersen</Typography>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default Slider
