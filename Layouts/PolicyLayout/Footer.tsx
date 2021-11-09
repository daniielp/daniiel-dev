import { Container, Theme, Grid, Typography, Link, Stack } from '@mui/material'
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme: Theme) => ({
    footer: {
        borderTop: "1px solid " + theme.palette.secondary.light,
        backgroundColor: theme.palette.secondary.dark,
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
    },
    bold: {
        fontWeight: 'bold',
    },
    tos: {
        color: "#BDBDBD",
        padding: "0 " + theme.spacing(1),
        textDecoration: "none",

        "&:last-child": {
            paddingRight: theme.spacing(0),
        }
    },
    legalContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: 'flex-end'
    },
    copyright: {
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
        }
    }
}))

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item md={6}>
                        <Typography variant="body2" className={classes.copyright}>
                            <Typography
                                variant="h6"
                                component="span"
                                className={classes.bold}
                            >
                                © 2021 Daniel Bøgh Pedersen
                            </Typography>
                            . Alle rettigheder forbeholdes.
                        </Typography>
                    </Grid>
                    <Grid item md={6} className={classes.legalContainer}>
                        <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} >
                            <Link href="/policies/brugeraftale" rel="nofollow" className={classes.tos}>Brugeraftale</Link>
                            <Link href="/policies/privatlivspolitik" rel="nofollow" className={classes.tos}>Privatlivspolitik</Link>
                            <Link href="/policies/cookies" rel="nofollow" className={classes.tos}>Cookies</Link>
                        </Stack>


                    </Grid>
                </Grid>
            </Container>
        </footer >
    )
}

export default Footer
