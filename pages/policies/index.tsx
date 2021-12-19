import { Container, Grid, Link, Typography } from '@mui/material';
import BodyText from '../../components/Typography/BodyText';



const index = () => {

    return (
        <section>
            <Container maxWidth="lg" sx={{py: [5, 5, 10]}}>
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
