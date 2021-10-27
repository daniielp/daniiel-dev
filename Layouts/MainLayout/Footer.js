import { Button, Container, Grid, makeStyles, TextField, Typography } from "@material-ui/core";
import TextBundle from "../../components/TextBundle";
import Image from 'next/image';
import EmailIcon from '../../assets/Icons/email.svg';
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  footer: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    backgroundColor: theme.palette.secondary.dark,

    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
  },
  description: {
    backgroundColor: theme.palette.secondary.light,
    padding: theme.spacing(2),
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  form: {
    backgroundColor: theme.palette.secondary.main,
    height: "100%",
    padding: theme.spacing(2),
  },
  emailIcon: {
      display: 'flex',
      alignItems: 'center',
  },
  FullWidth: {
      width: "100%",
      display: 'flex',
      flexDirection: 'column',
  },
  input: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container>
        <Grid container maxWidth="lg" spacing={5}>
          <Grid item md={6}>
            <TextBundle
              title="Har du nogle spørgsmål?"
              subtitle="Kontakt mig"
              text="Hvis du skulle stå og have nogle spørgsmål, eller har brug for hjælp og vejledning til din hjemmeside. Så er du altid velkommen til at kontakte mig enten over email på daniel.horsens@gmail.com eller ved at bruge kontaktformularen I højre side."
            />
          </Grid>
          <Grid item md={6} className={classes.formContainer}>
            <Grid container className={classes.description}>
              <Grid item xs={2} className={classes.emailIcon}>
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
            <div className={classes.form}>
              <form className={classes.FullWidth}>
                <TextField className={classes.input} fullwidth placeholder="Navn" variant="outlined" color="secondary" />
                <TextField className={classes.input} fullwidth placeholder="Email" variant="outlined" />
                <TextField className={classes.input} fullwidth placeholder="Emne" variant="outlined" />
                <TextField className={classes.input} fullwidth placeholder="Besked" multiline variant="outlined" />
                <Button disabled variant="contained" color="primary" type="submit">Send</Button>
                <Alert severity="warning">Denne formular er midlertidig deaktiveret</Alert>
              </form>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
