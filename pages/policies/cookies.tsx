import { Container, Grid, Link, Typography, Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import BodyText from '../../components/Typography/BodyText';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme: Theme) => ({
    section: {
        backgroundColor: theme.palette.secondary.dark,
    },
    container: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
    },
}))

function cookies(props: any) {
    const classes = useStyles();
    const router = useRouter();

    return (
        <section className={classes.section}>
            <Container maxWidth="lg" className={classes.container}>
                <Grid container>
                    {/* <Grid item md={3}>
                        
                    </Grid> */}
                    <Grid item md={12} id="tosSearch">
                        <Typography variant="h3" component="h2" gutterBottom>Cookies</Typography>
                        <BodyText gutterBottom>Når vi taler om cookies på internettet, mener vi små tekstfiler, der gemmes på dit terminaludstyr, f.eks. en computer eller anden enhed, via din webbrowser, når du besøger en hjemmeside. Oplysningerne i cookien fortæller hjemmesiden forskellige ting, såsom:</BodyText>
                        <ul>
                            <li>om du har besøgt hjemmesiden før</li>
                            <li>om du har en konto, som du har valgt at være logget ind på</li>
                            <li>om du har påbegyndt en en webformular men ikke har afsluttet den</li>
                        </ul>
                        <Typography variant="h4" component="h3" gutterBottom>Hvad er en cookie, lokal lagring af data og lignende teknologier?</Typography>
                        <BodyText gutterBottom>Lokal lagring af data inkluderer lagring af forskellige typer af data lokalt på din enhed via din webbrowser. Lokalt lagret data kan for eksempel indeholde brugerindstillinger, information om din adfærd på hjemmesiden, hvilken browser du anvender, hvilke annoncer du har fået vist samt lignende adfærd på hjemmesider, vi samarbejder med. Lokalt lagret data kan blive brugt til at personalisere indhold og funktioner, så dine besøg er bedre skræddersyet til dig og dine behov.</BodyText>
                        <BodyText gutterBottom>En metode for lokal lagring af data er cookies. Dette er små tekstfiler, som er gemt på din enhed (PC, mobiltelefon eller tablet). De gør det muligt for os at genkende din webbrowser. Cookies indeholder ikke personlig og identificérbar information om dig (såsom navn, adresse, telefonnummer etc.), men indeholder information om din webbrowser og anden aktivitet, som har fundet sted her.</BodyText>
                        <BodyText gutterBottom>I forlængelse af lokal lagring af data, benytter vi os også af teknologier såsom web beacons/pixel tags. Denne teknologi genkender cookies og andre identifikationsdata, som gør det muligt for tredjeparter at gemme cookies på din enhed. Web beacons kan blive brugt til at afgøre, hvilke annoncer der skal vises i din webbrowser.</BodyText>
                        <BodyText gutterBottom>I dette dokument er definitionen ”lokal lagring af data” brug som overordnet term for cookies, web beacons og lignende teknologier.</BodyText>
                        <Typography variant="h4" component="h3" gutterBottom>Hvorfor benytter daniiel.dev sig af lokal datalagring?</Typography>
                        <BodyText gutterBottom>Vi benytter os af lokal datalagring til en række forskellige formål såsom: at gøre det muligt for os at levere vores service til dig, give dig relevant og personligt indhold, når du besøger vores side, måling og analyse af trafik, forbedring af vores tjeneste og samt målrettet annoncering. Flere detaljer herom kan du læse om nedenfor.</BodyText>
                        <Typography variant="h4" component="h3" gutterBottom>Hvem benytter sig ellers af lokal datalagring på daniiel.dev hjemmeside?</Typography>
                        <BodyText gutterBottom>Vi benytter lokal datalagring selv og vi tillader, at vores samarbejdspartnere kan gøre brug af data, når de leverer deres service til os. Vores samarbejdspartnere er underlagt databehandleraftaler og må ikke anvende data til andre formål end de services, vi har aftalt.</BodyText>
                        <BodyText gutterBottom>I forlængelse af vores egen brug af data, tilbyder vi også tredjeparter muligheden for at bruge lokal datalagring på din enhed, når du besøger vores tjeneste. Vi har stringente retningslinjer for, hvordan tredjeparter må indsamle og bruge data fra vores besøgende. Disse retningslinjer tydeliggør, at data kun må anvendes til klart definerede formål.</BodyText>
                        <Typography variant="h5" component="h4" gutterBottom>Områder for anvendelse af lokal datalagring</Typography>
                        <BodyText gutterBottom>a ) Til at levere og tilpasse tjenester til jeres brug</BodyText>
                        <BodyText gutterBottom>Visse dele af den lokale datalagring er nødvendig og påkrævet for at gøre det muligt for dig at bruge vores tjeneste. Såsom information om dine indstillinger, som fortæller os, hvordan vores tjeneste skal præsenteres i din webbrowser.</BodyText>
                        <BodyText gutterBottom>Vi bruger også lokal datalagring til at tilpasse vores tjeneste, så den fungerer på bedst mulig vis på din enhed. For eksempel kan det være til at gemme dine præferencer for lyde, give dig den bedst mulige videokvalitet på din enhed baseret på information om din internethastighed eller gøre det muligt for os at bruge specielle funktioner såsom at gemme fortrolige reklamer.</BodyText>
                        <BodyText gutterBottom>b) Til at analysere og forbedre vores tjeneste</BodyText>
                        <BodyText gutterBottom>Hos daniiel.dev arbejder vi kontinuerligt med at optimere vores kundeoplevelse. Derfor indsamler vi forskellige typer af information, så vi altid kan levere den bedst mulige funktionalitet. For eksempel information om, hvilke sider du har besøgt på daniiel.dev samt hvilken browser du har brugt.</BodyText>
                        <BodyText gutterBottom>Vi kan bruge forskellige analyseværktøjer såsom Google Analytics til at foretage markedsundersøgelser, trafikundersøgelser og til at forbedre funktionalitet.</BodyText>
                        <BodyText gutterBottom>Vi bruger cookies for at gøre det nemmere at bruge vores tjeneste og personalisere visse dele af indholdet. Statistik omkring brugere og trafik er anvendt i et såkaldt aggregeret format. Så denne type af statistik ikke baseres på data, der kan forbindes med individer. Dog kan information om IP-adresser visse gange anvendes til at levere statistik omkring adfærd fra bestemte geografiske områder.</BodyText>
                        <Typography variant="h4" component="h3" gutterBottom>Hvordan kan jeg selv administrere data som er lokalt lagret?</Typography>
                        <BodyText gutterBottom>Overordnet: Du kan enten selv justere indstillingerne i din webbrowser eller bruge specielle programmer, som er udviklet til at håndtere cookies.</BodyText>
                        <BodyText gutterBottom>Indstillingerne i din webbrowser viser normal en liste over de cookies, der er blevet gemt. Såfremt du ønsker, kan du her slette eventuelt uønskede cookies. Normalt kan du indikere, at du accepterer cookies fra de hjemmesider, du besøger eller tredjeparter associeret med disse. Du kan også vælge at blive oplyst hver gang en ny cookie er blevet gemt. Vejledning i hvordan du gør dette er forskellig fra browser til browser – en detaljeret forklaring fremgår nedenfor. Din webbrowser gemmer normalt cookies i en bestemt mappe på din harddisk, så du kan også vælge at undersøge indholdet mere detaljeret.</BodyText>
                        <BodyText gutterBottom>Du kan også vælge at ændre indstillingen i din browser, så den ikke tillader cookies eller, at du selv skal acceptere hver enkelt cookie. Dette kan dog resultere i en dårligere oplevelse af visse tjenester og kan gøre det umuligt at tilgå sider, som kræver login.</BodyText>
                        <BodyText gutterBottom>Hvis du sletter dine cookies, vil de tomme cookies også forsvindeog du vil blive nødt til at downloade dem igen. For mere information om, hvordan du kan undgå cookies kan du besøge:</BodyText>
                        <BodyText gutterBottom><Link href="http://www.allaboutcookies.org" rel="nofollow">http://www.allaboutcookies.org</Link>.</BodyText>
                        <BodyText gutterBottom>Derudover er der flere tilgængelige tjenester, som er udviklet specifikt til at give brugere en fuldt opdateret liste af cookies og andre sporingsmekanismer. See eksempelvis</BodyText>
                        <BodyText gutterBottom><Link href="https://www.ghostery.com/" rel="nofollow">https://www.ghostery.com/</Link>.</BodyText>
                        <BodyText gutterBottom>NB: Slår du cookies fra daniiel.dev fra eller sletter dem, kan vores tjeneste ikke fungere optimalt. For eksempel vil dine personlige indstillinger forsvinde, du vil blive nødt til at logge ind hver gang du besøger os og du vil modtage tilfældige annoncer fremfor nogle, som er relevante for dig.</BodyText>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default cookies
