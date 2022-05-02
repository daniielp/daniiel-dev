import { Box, Grid, TextField, Typography, Alert, Button, IconButton } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from "../assets/Icons/email.svg";

const ContactForm = () => {
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
        <Box sx={{ display: 'flex', flexDirection: 'column', width: "100%" }}>
            <Grid container sx={{ bgcolor: 'secondary.light', p: 2 }}>
              <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
                <Image src={EmailIcon} width={50} height={50} alt="Email icon" />
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
              <Box component="form" sx={{ width: '100%;', display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
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
          </Box>
    )
}

export default ContactForm