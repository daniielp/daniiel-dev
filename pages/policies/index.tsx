import { Container, Grid, Link, Typography, Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import BodyText from '../../components/Typography/BodyText';

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
    },
}))


const index = () => {
    const classes = useStyles();

    return (
        <section>
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={10}>
                    <Grid item sm={12}>
                        <Typography align="center" variant="h3" component="h1" gutterBottom>Privatliv & betingelser</Typography>
                    </Grid>
                    <Grid item md={6}>
                        <Typography variant="h4" component="h2">Brugeraftale</Typography>
                        <BodyText>Indholder informationer omkring, hvad du som bruger går med til når du bruger siden.</BodyText>
                        <Link href="/policies/brugeraftale" rel="nofollow" underline="hover">Læs vores brugeraftalen</Link>
                    </Grid>
                    <Grid item md={6}>
                        <Typography variant="h4" component="h2">Privatlivspolitik</Typography>
                        <BodyText>Beskriver hvilke nogle regler jeg/vi følger når vi behandler personfølsomme oplysninger om dig.</BodyText>
                        <Link href="/policies/privatlivspolitik" rel="nofollow" underline="hover">Læs vores privatlivspolitik</Link>
                    </Grid>
                    <Grid item md={6}>
                        <Typography variant="h4" component="h2">Cookies</Typography>
                        <BodyText>Indholder informationer omkring, hvilke trejdeparts cookies der bliver brugt og hvorfor jeg/vi bruger dem.</BodyText>
                        <Link href="/policies/privatlivspolitik" rel="nofollow" underline="hover">Læs vores cookies</Link>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default index
