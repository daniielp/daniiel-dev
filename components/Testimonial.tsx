import { Button, Grid, Typography } from '@material-ui/core';
import { Container, makeStyles} from '@material-ui/core';
import { Theme } from '@material-ui/core/styles'
import TextBundle from './TextBundle';
import Image from 'next/image'
import BodyText from './BodyText';
import { BorderBottom } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) => ({
    testimonial: {
        backgroundColor: theme.palette.secondary.dark,
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        borderBottom: "1px solid " + theme.palette.secondary.light,
    },
    button: {
        color: theme.palette.primary.main,
        fontWeight: 'bold'
    }
}))

const Testimonial = () => {
    const classes = useStyles();

    return (
        <section className={classes.testimonial}>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <TextBundle title="Hvad siger folk?" subtitle="Anmeldelser" text="Jeg har haft muligheden for at arbejde med nogle helt fantastiske mennesker, og tænkte jeg lige ville dele hvad de har sagt om mig." />
                        <Button className={classes.button}>Se mere</Button>
                    </Grid>
                    <Grid item md={6}>
                        <Grid container>
                            <Grid item md={4}>
                                {/* <Image alt="Author" /> */}
                            </Grid>
                            <Grid item md={8}>
                                <Typography variant="body1" component="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl purus in mollis nunc sed. Eu turpis egestas pretium aenean pharetra. Porttitor leo a diam sollicitudin tempor id eu. Consequat interdum varius sit amet mattis vulputate enim nulla. </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default Testimonial
