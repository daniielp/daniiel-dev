import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button, Container, Grid, Link, makeStyles, SvgIcon, Typography } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles'
import TextBundle from './Typography/TextBundle';
import Image from 'next/image'
import Illustration from '../assets/images/question.svg'
import ArrowDownIcon from '../assets/icons/down.svg'
import BodyText from './Typography/BodyText';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles((theme: Theme) => ({
    faqContainer: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
    },
    accordionContainer: {
        marginTop: theme.spacing(4),
        backgroundColor: theme.palette.secondary.dark
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

                        <Accordion className={classes.accordionContainer} defaultExpanded={true}>
                            <AccordionSummary expandIcon={<Image src={ArrowDownIcon} width={32} height={32} />}>
                                <Typography variant="h4" component="h3">Hvem er jeg</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed enim. In massa tempor nec feugiat.</BodyText>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={classes.accordionContainer}>
                            <AccordionSummary expandIcon={<Image src={ArrowDownIcon} width={32} height={32} />}>
                                <Typography variant="h4" component="h3">Hvorfor daniiel med 2 i'er</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed enim. In massa tempor nec feugiat.</BodyText>
                            </AccordionDetails>
                            <AccordionActions>
                                <Button color="primary" disabled>Læs mere</Button>
                            </AccordionActions>
                        </Accordion>
                        <Accordion className={classes.accordionContainer}>
                            <AccordionSummary expandIcon={<Image src={ArrowDownIcon} width={32} height={32} />}>
                                <Typography variant="h4" component="h3">Fremtidsplaner</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed enim. In massa tempor nec feugiat.</BodyText>
                            </AccordionDetails>
                        </Accordion>
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
