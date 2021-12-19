import {Button, Container, Grid, TextField, Typography, Link, Theme, Stack, Box} from "@mui/material";
import Image from "next/image";
import EmailIcon from "../../assets/Icons/email.svg";
import { Alert } from '@mui/material';


const Footer = () => {
  return (
    <Box component="footer" sx={{pt: [5,5,10], bgcolor: 'secondary.dark', pb: [5,5, 0]}}>
      <Container>
        <Grid container spacing={5}>
          <Grid item md={6}>
            {/* <TextBundle
              title="Har du nogle spørgsmål?"
              subtitle="Kontakt mig"
              text={"Hvis du skulle stå og have nogle spørgsmål, eller har brug for hjælp og vejledning til din hjemmeside. Så er du altid velkommen til at kontakte mig enten over email på daniel.horsens@gmail.com eller ved at bruge kontaktformularen I højre side."}
            /> */}
          </Grid>
          <Grid item md={6} sx={{display: 'flex', flexDirection: 'column'}}>
            <Grid container sx={{bgcolor: 'secondary.light', p: 2}}>
              <Grid item xs={2} sx={{display: 'flex', alignItems: 'center'}}>
                <Image src={EmailIcon} width={50} height={50} />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="body2">
                  Du er altid velkommen til at sende mig en besked angående
                  hjælp til din hjemmeside eller bare hvis du har nogle
                  spørgsmål. Så svarer jeg tilbage indenfor 24 timer.
                </Typography>
              </Grid>
            </Grid>
            <Box sx={{bgcolor: 'secondary.main', height: '100%', p:2}}>
              <Box component="form" sx={{width: '100%;', display: 'flex', flexDirection: 'column'}}>
                <TextField
                    sx={{my: 2}}
                    fullWidth={true}
                    label="Navn"
                    variant="outlined"
                />
                <TextField
                    sx={{my: 2}}
                    fullWidth={true}
                    label="Email"
                    variant="outlined"
                />
                <TextField
                    sx={{my: 2}}
                    fullWidth={true}
                    label="Emne"
                    variant="outlined"
                />
                <TextField
                    sx={{my: 2}}
                    fullWidth={true}
                    label="Besked"
                    multiline
                    variant="outlined"
                />
                <Button
                  disabled
                  fullWidth={true}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Send
                </Button>
                <Alert severity="warning">
                  Denne formular er midlertidig deaktiveret
                </Alert>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box component="section" sx={{borderTop: 1, borderColor: 'secondary.light', mt: 5, py: 5}} >
        <Container>
          <Grid container>
            <Grid item md={6}>
              <Typography variant="body2" sx={{textAlign: ['center', 'center', 'left']}}>
                <Typography
                  variant="h6"
                  component="span"
                  sx={{fontWeight: 'bold'}}
                >
                  © 2021 Daniel Bøgh Pedersen
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
      </Box>
    </Box>
  );
};

export default Footer;
