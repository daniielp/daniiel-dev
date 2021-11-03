import {
  Button,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
  Link
} from "@material-ui/core";
import TextBundle from "../../components/Typography/TextBundle";
import Image from "next/image";
import EmailIcon from "../../assets/Icons/email.svg";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  footer: {
    paddingTop: theme.spacing(10),
    // paddingBottom: theme.spacing(10),
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
    display: "flex",
    flexDirection: "column",
  },
  form: {
    backgroundColor: theme.palette.secondary.main,
    height: "100%",
    padding: theme.spacing(2),
  },
  emailIcon: {
    display: "flex",
    alignItems: "center",
  },
  FullWidth: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  copyrightNotice: {
    borderTop: "1px solid " + theme.palette.secondary.light,
    marginTop: theme.spacing(5),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  bold: {
    fontWeight: "bold",
  },
  tos: {
    color: theme.palette.text.hint,
    padding: "0 " + theme.spacing(1) + "px",

    "&:last-child": {
      paddingRight: theme.spacing(0),
    }
  },
  legalContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: 'flex-end'
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container>
        <Grid container spacing={5}>
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
                <TextField
                  className={classes.input}
                  fullWidth={true}
                  label="Navn"
                  variant="outlined"
                />
                <TextField
                  className={classes.input}
                  fullWidth={true}
                  label="Email"
                  variant="outlined"
                />
                <TextField
                  className={classes.input}
                  fullWidth={true}
                  label="Emne"
                  variant="outlined"
                />
                <TextField
                  className={classes.input}
                  fullWidth={true}
                  label="Besked"
                  multiline
                  variant="outlined"
                />
                <Button
                  disabled
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Send
                </Button>
                <Alert severity="warning">
                  Denne formular er midlertidig deaktiveret
                </Alert>
              </form>
            </div>
          </Grid>
        </Grid>
      </Container>
      <section className={classes.copyrightNotice}>
        <Container>
          <Grid container>
            <Grid item md={6}>
              <Typography variant="body2">
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
              <Link href="#" className={classes.tos}>Brugeraftale</Link>
              <Link href="#" className={classes.tos}>Privatlivspolitik</Link>
              <Link href="#" className={classes.tos}>Cookies</Link>
            </Grid>
          </Grid>
        </Container>
      </section>
    </footer>
  );
};

export default Footer;
