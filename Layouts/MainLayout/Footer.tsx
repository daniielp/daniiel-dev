import {Container, Grid, Typography, Link, Theme, Stack, Box } from "@mui/material";
import TextBundle from "../../components/Typography/TextBundle";
import ContactForm from "../../components/ContactForm";

declare global {
  interface Window {
    grecaptcha: any;
  }
}

const Footer = () => {

  return (
    <Box component="footer" sx={{ pt: [5, 5, 10], bgcolor: 'secondary.dark', pb: [5, 5, 0] }}>
      <Container>
        <Grid container spacing={5}>
          <Grid item md={6}>
            <TextBundle
              title="Har du nogle spørgsmål?"
              subtitle="Kontakt mig"
              text={"Hvis du skulle stå og have nogle spørgsmål, eller har brug for hjælp og vejledning til din hjemmeside. Så er du altid velkommen til at kontakte mig ved at bruge kontaktformularen I højre side."}
            />
          </Grid>
          <Grid item md={6}>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
      <Box component="section" sx={{ borderTop: 1, borderColor: 'secondary.light', mt: 5, py: 5 }} >
        <Container>
          <Grid container>
            <Grid item md={6}>
              <Typography variant="body2" sx={{ textAlign: ['center', 'center', 'left'] }}>
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: 'bold' }}
                >
                  © {new Date().getFullYear()} Daniel Bøgh Pedersen
                </Typography>
                . Alle rettigheder forbeholdes.
              </Typography>
            </Grid>
            <Grid item md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
              <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} >
                <Link href="/policies/brugeraftale" rel="nofollow" sx={{ color: "#BDBDBD", p: (theme: Theme) => "0 " + theme.spacing(1), textDecoration: 'none' }}>Brugeraftale</Link>
                <Link href="/policies/privatlivspolitik" rel="nofollow" sx={{ color: "#BDBDBD", p: (theme: Theme) => "0 " + theme.spacing(1), textDecoration: 'none' }}>Privatlivspolitik</Link>
                <Link href="/policies/cookies" rel="nofollow" sx={{ color: "#BDBDBD", p: (theme: Theme) => "0 " + theme.spacing(1), textDecoration: 'none', pr: 0 }}>Cookies</Link>
              </Stack>


            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
