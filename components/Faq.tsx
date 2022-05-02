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
import { useRouter } from 'next/router';
import NextLink from 'next/link';


const Faq = () => {
    const { push } = useRouter();

    const handleRedirect = (path: string) => {
        push(path)
    }

    return (
        <Box sx={{ py: [5, 5, 10] }} component="section">
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item md={6}>
                        <TextBundle title="Nu er du snart ved at være ved ende." subtitle="FAQ" text="Så er du velkommen til at sende mig en besked, og så vil jeg vende tilbage indenfor 1-2 dage." />
                        <Link href="#contact" color="primary" sx={{ display: "block", pb: 4 }}>Kom i kontakt</Link>

                        {/* <Accordion itemScope itemProp="mainEntity" itemType="https://schema.org/Question" sx={{ bgcolor: 'secondary.dark' }} defaultExpanded={true}>
                            <AccordionSummary expandIcon={<Image src={ArrowDownIcon} width={32} height={32} />}>
                                <Typography itemProp="name" variant="h4" component="h3">Hvem er jeg</Typography>
                            </AccordionSummary>
                            <AccordionDetails itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                <BodyText itemProp="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed enim. In massa tempor nec feugiat.</BodyText>
                            </AccordionDetails>
                        </Accordion> */}
                        <Accordion itemScope itemProp="mainEntity" itemType="https://schema.org/Question" sx={{ bgcolor: 'secondary.dark' }} defaultExpanded={true}>
                            <AccordionSummary expandIcon={<Image src={ArrowDownIcon} width={32} height={32} alt="expand/contract icon" />}>
                                <Typography itemProp="name" variant="h4" component="h3">Hvorfor daniiel med 2 i'er</Typography>
                            </AccordionSummary>
                            <AccordionDetails itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                <BodyText itemProp="text">Det er sjovt hvordan at en tastefejl/stavefejl kan blive til ens brand/identitet. Med desto længere tid jeg har haft navnet, desto mere er jeg også begyndt at kunne lide det.</BodyText>
                            </AccordionDetails>
                            <AccordionActions>
                                <NextLink href="/om-mig#historien" passHref>
                                    <Button>Læs hele historien bag</Button>
                                </NextLink>
                            </AccordionActions>
                        </Accordion>
                        <Accordion itemScope itemProp='mainEntity' itemType="https://schema.org/Question" sx={{ bgcolor: 'secondary.dark' }} defaultExpanded={true}>
                            <AccordionSummary expandIcon={<Image src={ArrowDownIcon} width={32} height={32} alt="expand/contract icon" />}>
                                <Typography itemProp="name" variant="h4" component="h3">Personlige målsætninger</Typography>
                            </AccordionSummary>
                            <AccordionDetails itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                <BodyText itemProp="text">Med tiden jeg har arbejdet som fullstack developer med speciale i web development, har jeg fundet en dyb interesse i <Typography component="span" sx={{fontWeight: 'bold', color: 'primary.main'}}>frontend development</Typography> og <Typography component="span" sx={{fontWeight: 'bold', color: 'primary.main'}}>UI/UX</Typography>. Hvilket vil kunne ses i de fremtidige hjemmesider jeg kommer til at lave.</BodyText>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item md={6}>
                        <Image src={Illustration} width={600} height={400} alt="question illustration" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Faq
