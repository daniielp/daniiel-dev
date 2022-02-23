import {Box, Container, Grid, Link} from '@mui/material';
import TextBundle from './Typography/TextBundle';

const Hero = () => {

    return (
        <Box sx={{py: [5, 5, 10], bgcolor: 'secondary.dark' }} component="section">
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
        </Box>
    );
}

export default Hero
