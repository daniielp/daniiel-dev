import { Button, Grid, Typography } from '@mui/material';
import { Container } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles'
import TextBundle from './Typography/TextBundle';
import Image from 'next/image'
import BodyText from './Typography/BodyText';
import TestimonialSlider from './TestimonialSlider';

const useStyles = makeStyles((theme: Theme) => ({
    testimonial: {
        backgroundColor: theme.palette.secondary.dark,
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        borderBottom: "1px solid " + theme.palette.secondary.light,
    },
    button: {
        color: theme.palette.primary.main,
        fontWeight: 'bold'
    },
    testimonailPlacement: {
        display: "flex",
        justifyContent: "center"
    }
}))

const Testimonial = () => {
    const classes = useStyles();

    return (
        <section className={classes.testimonial}>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <TextBundle title="Hvad siger folk?" subtitle="Anmeldelser" text="Jeg har haft muligheden for at arbejde med nogle helt fantastiske mennesker, og tænkte jeg lige ville dele hvad de har sagt om mig." />
                        <Button className={classes.button}>Se mere</Button>
                    </Grid>
                    <Grid item md={6} className={classes.testimonailPlacement}>
                        <TestimonialSlider />
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default Testimonial
