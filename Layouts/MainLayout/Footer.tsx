import { Button, Container, Grid, TextField, Typography, Link, Theme, Stack, Box, IconButton } from "@mui/material";
import Image from "next/image";
import EmailIcon from "../../assets/Icons/email.svg";
import { Alert } from '@mui/material';
import TextBundle from "../../components/Typography/TextBundle";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react'
import { setServers } from "dns";

declare global {
  interface Window {
    grecaptcha: any;
  }
}

const Footer = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string>();
  const [severity, setSeverity] = useState<"warning" | "success">("warning");


  const handleSubmit = async (event: any) => {
    event.preventDefault();

    setIsDisabled(true);

    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(process.env.NEXT_PUBLIC_RECAPTCHA_KEY, { action: "submit" })
        .then(async (token: string) => {
          var formData = new FormData(event.target);
          let payload = {} as any;
          formData.forEach((value, name) => {
            payload[name] = value;
          })
          payload["recaptchaResponse"] = token

          const options = {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
          }

          const response = await fetch("api/email/send-transactional-email", options)

          if (response.status == 200) {
            setSeverity("success")
            setAlertMessage("Mange tak for din interesse i daniiel.dev. Jeg vender hurtigst muligt tilbage over mail.")
          } else {
            setSeverity("warning")
            setAlertMessage("Tjek at dine oplysninger er korrekte og prøv igen")
          }

          event.target.reset();

        });
    })




  }

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
          <Grid item md={6} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Grid container sx={{ bgcolor: 'secondary.light', p: 2 }}>
              <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
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
            <Box sx={{ bgcolor: 'secondary.main', height: '100%', p: 2 }}>
              <Box component="form" sx={{ width: '100%;', display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit} id="contact">
                <TextField
                  name="name"
                  sx={{ my: 2 }}
                  InputProps={{
                    sx: {
                      "input:-webkit-autofill": {
                        WebkitBoxShadow: "0 0 0 1000px #383f54 inset",
                      }
                    }
                  }}
                  fullWidth={true}
                  label="Navn"
                  variant="outlined"
                  required
                />
                <TextField
                  name="email"
                  sx={{ my: 2 }}
                  InputProps={{
                    sx: {
                      "input:-webkit-autofill": {
                        WebkitBoxShadow: "0 0 0 1000px #383f54 inset",
                      }
                    }
                  }}
                  fullWidth={true}
                  type="email"
                  label="Email"
                  variant="outlined"
                  required
                />
                <TextField
                  name="subject"
                  sx={{ my: 2 }}
                  InputProps={{
                    sx: {
                      "input:-webkit-autofill": {
                        WebkitBoxShadow: "0 0 0 1000px #383f54 inset",
                      }
                    }
                  }}
                  fullWidth={true}
                  label="Emne"
                  variant="outlined"
                  required
                />
                <TextField
                  name="message"
                  sx={{ my: 2 }}
                  InputProps={{
                    sx: {
                      "input:-webkit-autofill": {
                        WebkitBoxShadow: "0 0 0 1000px #383f54 inset",
                      }
                    }
                  }}
                  fullWidth={true}
                  label="Besked"
                  multiline
                  variant="outlined"
                  required
                />
                <Button
                  disabled={isDisabled}
                  fullWidth={true}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Send
                </Button>
                {alertMessage ? (
                  <Alert severity={severity}
                    action={<IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setAlertMessage("");
                        setSeverity("warning")
                      }}
                    >
                      <CloseIcon />
                    </IconButton>}>
                    {alertMessage}
                  </Alert>
                ) : null}
              </Box>
            </Box>
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
