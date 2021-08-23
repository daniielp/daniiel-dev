import { Grid } from '@material-ui/core';
import { Container, makeStyles} from '@material-ui/core';
import { Theme } from '@material-ui/core/styles'
import TextBundle from './TextBundle';

const useStyles = makeStyles((theme: Theme) => ({
    testimonial: {
        backgroundColor: theme.palette.secondary.dark,
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10)
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
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default Testimonial
