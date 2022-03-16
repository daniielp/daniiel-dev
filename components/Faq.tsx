import {
    Accordion,
    AccordionActions,
    AccordionDetails,
    AccordionSummary, Box,
    Button,
    Container,
    Grid,
    Link,
    Typography,
} from '@mui/material';
import TextBundle from './Typography/TextBundle';
import Image from 'next/image'
import Illustration from '../assets/images/question.svg'
import ArrowDownIcon from '../assets/Icons/down.svg'
import BodyText from './Typography/BodyText'


const Faq = () => {
    return (
        <Box sx={{ py: [5, 5, 10] }} component="section">
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item md={6}>
                        <TextBundle title="Nu er du snart ved at være ved ende." subtitle="FAQ" text="Så er du velkommen til at sende mig en besked, og så vil jeg vende tilbage indenfor 1-2 dage." />
                        <Link href="mailto:daniel.horsens@gmail.com?subject=FAQ - daniiel.dev" color="primary" sx={{display: "block", pb: 4}}>daniel.horsens@gmail.com</Link>

                        <Accordion itemScope itemProp="mainEntity" itemType="https://schema.org/Question" sx={{ bgcolor: 'secondary.dark' }} defaultExpanded={true}>
                            <AccordionSummary expandIcon={<Image src={ArrowDownIcon} width={32} height={32} />}>
                                <Typography itemProp="name" variant="h4" component="h3">Hvem er jeg</Typography>
                            </AccordionSummary>
                            <AccordionDetails itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                <BodyText itemProp="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed enim. In massa tempor nec feugiat.</BodyText>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion itemScope itemProp="mainEntity" itemType="https://schema.org/Question" sx={{ bgcolor: 'secondary.dark' }} defaultExpanded={true}>
                            <AccordionSummary expandIcon={<Image src={ArrowDownIcon} width={32} height={32} />}>
                                <Typography itemProp="name" variant="h4" component="h3">Hvorfor daniiel med 2 i'er</Typography>
                            </AccordionSummary>
                            <AccordionDetails itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                <BodyText itemProp="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed enim. In massa tempor nec feugiat.</BodyText>
                            </AccordionDetails>
                            <AccordionActions>
                                <Button color="primary" disabled>Læs historien bag</Button>
                            </AccordionActions>
                        </Accordion>
                        <Accordion itemScope itemProp='mainEntity' itemType="https://schema.org/Question" sx={{ bgcolor: 'secondary.dark' }} defaultExpanded={true}>
                            <AccordionSummary expandIcon={<Image src={ArrowDownIcon} width={32} height={32} />}>
                                <Typography itemProp="name" variant="h4" component="h3">Fremtidsplaner</Typography>
                            </AccordionSummary>
                            <AccordionDetails itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                <BodyText itemProp="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed enim. In massa tempor nec feugiat.</BodyText>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item md={6}>
                        <Image src={Illustration} width={600} height={400} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Faq
