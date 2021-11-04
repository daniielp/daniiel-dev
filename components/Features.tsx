import { Container, Grid, Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react'

const cardHeight = 290;

const useStyles = makeStyles((theme: Theme) => ({
    card: {
        backgroundColor: theme.palette.secondary.light,
        height: 290,
        transform: 'translateY(-50%)',
        margin: theme.spacing(1),
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
        }
    }
}))

const Features = () => {
    const classes = useStyles();
    return (
        <section>
            <Container maxWidth="lg">
                <Grid container justifyContent="flex-end" spacing={2}>
                    <Grid item md={2} className={classes.card}>
                        hejsa
                    </Grid>
                    <Grid item md={2} className={classes.card}>
                        hejsa
                    </Grid>
                    <Grid item md={2} className={classes.card}>
                        hejsa
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

export default Features
