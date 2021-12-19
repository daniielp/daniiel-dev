import { Container, Grid } from '@mui/material';
import React from 'react'


const Features = () => {
    return (
        <section>
            <Container maxWidth="lg">
                <Grid container justifyContent="flex-end" spacing={2}>
                    <Grid item md={2} sx={{bgcolor: 'secondary.light', height: 290, transform: 'translateY(-50%)', m:1, '&:hover': {bgcolor: 'primary.main', color: 'primary.contrastText'}}}>
                        hejsa
                    </Grid>
                    <Grid item md={2} sx={{bgcolor: 'secondary.light', height: 290, transform: 'translateY(-50%)', m:1, '&:hover': {bgcolor: 'primary.main', color: 'primary.contrastText'}}}>
                        hejsa
                    </Grid>
                    <Grid item md={2} sx={{bgcolor: 'secondary.light', height: 290, transform: 'translateY(-50%)', m:1, '&:hover': {bgcolor: 'primary.main', color: 'primary.contrastText'}}}>
                        hejsa
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

export default Features
