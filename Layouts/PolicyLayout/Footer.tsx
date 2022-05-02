import {Container, Theme, Grid, Typography, Link, Stack, Box} from '@mui/material'

const Footer = () => {
    return (
        <Box component="footer" sx={{borderTop: 1, borderColor: 'secondary.light', bgcolor: 'secondary.dark', py: 5}}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item md={6}>
                        <Typography variant="body2" sx={{textAlign: ['center', 'center', 'left']}}>
                            <Typography
                                variant="h6"
                                component="span"
                                sx={{fontWeight: 'bold'}}
                            >
                                © {new Date().getFullYear()} Daniel Bøgh Pedersen
                            </Typography>
                            . Alle rettigheder forbeholdes.
                        </Typography>
                    </Grid>
                    <Grid item md={6} sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
                        <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} >
                            <Link href="/policies/brugeraftale" rel="nofollow" sx={{color: "#BDBDBD", p: (theme : Theme) => "0 " + theme.spacing(1), textDecoration: 'none'}}>Brugeraftale</Link>
                            <Link href="/policies/privatlivspolitik" rel="nofollow" sx={{color: "#BDBDBD", p: (theme : Theme) => "0 " + theme.spacing(1), textDecoration: 'none'}}>Privatlivspolitik</Link>
                            <Link href="/policies/cookies" rel="nofollow" sx={{color: "#BDBDBD", p: (theme : Theme) => "0 " + theme.spacing(1), textDecoration: 'none', pr: 0}}>Cookies</Link>
                        </Stack>


                    </Grid>
                </Grid>
            </Container>
        </Box >
    )
}

export default Footer
