import {Box, Button, Grid} from '@mui/material';
import { Container } from '@mui/material';
import TextBundle from './Typography/TextBundle';
import TestimonialSlider from './Tabs/TestimonialSlider';


const Testimonial = () => {

    return (
        <Box sx={{bgcolor: 'secondary.dark', py: [5, 5, 10]}} component="section">
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <TextBundle title="Hvad siger folk?" subtitle="Anmeldelser" text="Jeg har haft muligheden for at arbejde med nogle helt fantastiske mennesker, og tænkte jeg lige ville dele hvad de har sagt om mig." />
                        <Button sx={{color: 'primary.main', fontWeight: 'bold'}}>Se mere</Button>
                    </Grid>
                    <Grid item md={6} sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                        <TestimonialSlider />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Testimonial
