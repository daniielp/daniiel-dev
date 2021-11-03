import { Button, Container, Grid, Link, makeStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles'
import TextBundle from './Typography/TextBundle';
import Image from 'next/image'
import Illustration from '../assets/images/question.svg'
const useStyles = makeStyles((theme: Theme) => ({
    faqContainer: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
    },
}))

const Faq = () => {
    const classes = useStyles();
    return (
        <section className={classes.faqContainer}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item md={6}>
                        <TextBundle title="Nu er du snart ved at være ved ende." subtitle="FAQ" text="Så er du velkommen til at sende mig en besked, og så vil jeg vende tilbage indenfor 1-2 dage." />
                        <Link href="mailto:daniel.horsens@gmail.com?subject=FAQ - daniiel.dev" color="primary">daniel.horsens@gmail.com</Link>
                    </Grid>
                    <Grid item md={6}>
                        <Image src={Illustration} width={600} height={400} />
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default Faq
