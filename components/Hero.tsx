import {Box, Container, Grid, Link} from '@mui/material';
import TextBundle from './Typography/TextBundle';

const Hero = () => {

    return (
        <Box sx={{py: [5, 5, 10], bgcolor: 'secondary.dark' }} component="section">
            <Container maxWidth="lg">

                <Grid container spacing={5}>
                    <Grid item md={6}>
                        <TextBundle title="Udvikler med høje ambitioner" subtitle="Om mig" text="Min vision er at hjælpe små og mellemstore virksomheder med at få lavet en skræddersyet hjemmeside, som passer til deres online tilstedeværelse, på det vi alle kender som internettet. Ved at vælge mig er du sikret en skræddersyet hjemmeside kodet fra bunden." />
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
