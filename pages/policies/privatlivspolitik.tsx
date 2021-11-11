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

function privatlivspolitik(props: any) {
    const classes = useStyles();
    const router = useRouter();

    return (
        <section className={classes.section}>
            <Container maxWidth="lg" className={classes.container}>
                <Grid container>
                    {/* <Grid item md={3}>
                        
                    </Grid> */}
                    <Grid item md={12} id="tosSearch">
                        <Typography variant="h3" component="h2" gutterBottom>Privatlivspolitik</Typography>
                        <BodyText gutterBottom>Denne hjemmeside tilhører Daniel Bøgh Pedersen. Denne privatlivspolitik informerer personer, som besøger og anvender hjemmesiden daniiel.dev («Tjenesten»).</BodyText>
                        <BodyText gutterBottom>Bemærk at denne privatlivspolitik ikke dækker behandling af personoplysninger.</BodyText>
                        <Typography variant="h4" component="h3" gutterBottom>Databehandling i en nøddeskal</Typography>
                        <BodyText gutterBottom>Når du besøger Tjenesten, indsamler vi fx personoplysninger om dig, når du begynder at udfylde information i en webformular, når du abonnerer på nyhedsbreve, når du deltager i markedsføringskampagner eller udfylder spørgeskemaer, eller når du kontakter vores support.</BodyText>
                        <BodyText gutterBottom>Vi behandler personoplysninger, som du selv afgiver, når du udfylder en webformular, eller for eksempel via abonnement på nyhedsbreve.</BodyText>
                        <BodyText gutterBottom>Vi behandler personoplysninger om dig, når vi yder support, udsender kommunikation eller markedsføringsmateriale.</BodyText>
                        <BodyText gutterBottom>I al behandling af personoplysninger om dig respekterer vi din ret til databeskyttelse. Vi behandler kun oplysninger, som kan henføres til dig, når det er nødvendigt for at kunne varetage formålet med behandlingen.</BodyText>
                        <BodyText gutterBottom>Du kan selv påvirke, hvordan vi behandler personoplysninger om dig. Læs mere under punktet:</BodyText>
                        <Typography variant="h4" component="h3" gutterBottom>Hvem behandler personoplysninger om dig?</Typography>
                        <BodyText gutterBottom>Daniel Bøgh Pedersen er dataansvarlig og behandler personoplysninger om dig, når du bruger Tjenesten eller services, som tilbydes af daniiel.dev</BodyText>
                        <Typography variant="h4" component="h3" gutterBottom>Hvem kan du kontakte om databeskyttelse?</Typography>
                        <BodyText gutterBottom>Hvis du har spørgsmål om databeskyttelse, eller du vil bruge dine rettigheder (se nedenfor), beder vi dig kontakte:</BodyText>
                        <BodyText>Daniel Bøgh Pedersen på <Link href="mailto:info@daniiel.dev" underline="hover">info@daniiel.dev</Link>.</BodyText>
                        <Typography variant="h4" component="h3" gutterBottom>Hvilke typer af personoplysninger behandler vi om dig?</Typography>
                        <BodyText gutterBottom>Teknisk information sendt til og fra din browser til vores server (IP-adresse, browser, lokation, sprog) og information om tracking f.eks. cookies sendt til browseren, f.eks. hvilket website besøgende kommer fra, hvilken browser du anvender og hvornår og hvilke dele af Tjenesten du har besøgt Klager, feedback og eventuel anden kommunikation og handlinger over for daniiel.dev.</BodyText>
                        <BodyText>Permission til direkte markedsføring og frameldelser fra samme, hvis du tilmelder dig elektroniske nyhedsbreve og teknisk information om brug af og information indhentet fra målrettede markedsføringstiltag.</BodyText>
                        <Typography variant="h4" component="h3" gutterBottom>På hvilke juridiske grundlag behandler jeg/vi personoplysninger om dig?</Typography>
                        <BodyText gutterBottom>Vi behandler personoplysninger baseret på vores legitime interesser, som udspringer af brugen af Tjenesten, jf. artikel 6, stk. 1, litra f, i Databeskyttelsesforordningen. Vores legitime interesser er f.eks.</BodyText>
                        <ul>
                            <li>at sende dig elektroniske nyhedsbreve, når du har tilmeldt dig nyhedsbrevene.</li>
                            <li>at lave brugertilfredshedsundersøgelser</li>
                        </ul>
                        <BodyText gutterBottom>Samtykke til tracking via cookies (samtykke indhentes via pop-up på Tjenesten), jf. § 4 om samtykke i Bekendtgørelse 2011-12-09 nr. 1148 om krav til information og samtykke ved lagring af eller adgang til oplysninger i slutbrugeres terminaludstyr. Du kan når som helst tilbagekalde samtykket til behandling af tracking og cookies ved at slette cookies i dit system som beskrevet i vores cookie-politik, som du finder her.</BodyText>
                        <Typography variant="h4" component="h3" gutterBottom>Hvor længe beholder vi personoplysninger om dig?</Typography>
                        <BodyText>Vi opbevarer personoplysninger, så længe det er nødvendig for at varetage formålene, herunder at overholde lovbestemte forpligtelser til behandling af personoplysninger.</BodyText>
                        <BodyText gutterBottom>Som regel opbevarer vi personoplysningerne i 2 år.</BodyText>
                        <Typography variant="h4" component="h3" gutterBottom>Hvilke rettigheder har du?</Typography>
                        <BodyText>Hvis du vil udnytte dine rettigheder, som er oplistet nedenfor, beder vi dig skrive en e-mail til: <Link href="mailto:info@daniiel.dev" underline="hover">info@daniiel.dev</Link>*</BodyText>
                        <BodyText gutterBottom>*Bemærk at lovgivningen indeholder en række undtagelser til de rettigheder, der er oplistet nedenfor.</BodyText>
                        <Typography variant="h5" component="h4" gutterBottom>Ret til indsigt</Typography>
                        <BodyText gutterBottom>Du har ret til at få en bekræftelse fra os på, om vi behandler personoplysninger om dig. Du har også ret til at få indsigt i personoplysninger om dig og information om behandling af personoplysninger om dig.</BodyText>
                        <BodyText gutterBottom>Hvis du udnytter din indsigtsret, vil vi give dig en kopi af de personoplysninger, som vi behandler om dig. Hvis du beder om flere kopier, kan opkræve et rimeligt gebyr baseret på vores administrative omkostninger.</BodyText>
                        <Typography variant="h5" component="h4" gutterBottom>Ret til berigtigelse</Typography>
                        <BodyText gutterBottom>Du har ret til at få urigtige personoplysninger om dig berigtiget af den dataansvarlige uden unødig forsinkelse. Du har også under hensyntagen til formålene med behandlingen ret til få fuldstændiggjort ufuldstændige personoplysninger, bl.a. ved at fremlægge en supplerende erklæring.</BodyText>
                        <Typography variant="h5" component="h4" gutterBottom>Ret til at bede os om at slette personoplysninger</Typography>
                        <BodyText>Du har ret til at bede om at få slettet personoplysninger om dig uden unødig forsinkelse, hvis:</BodyText>
                        <BodyText>- personoplysningerne er ikke længere nødvendige til at opfylde de formål, hvortil de blev indsamlet eller på anden vis behandlet</BodyText>
                        <BodyText>- du trækker dit samtykke, som behandlingen er baseret på, tilbage, og der er ingen andre retsgrundlag for behandlingen af oplysningerne</BodyText>
                        <BodyText>- du gør indsigelse mod behandlingen af grunde, der vedrører din særlige situation, og der foreligger ikke legitime grunde til behandlingen, som går forud for indsigelsen, eller du gør indsigelse mod behandlingen til direkte markedsføringsformål</BodyText>
                        <BodyText>- vi har behandlet personoplysninger om dig ulovligt, eller</BodyText>
                        <BodyText>- personoplysninger skal slettes for at overholde gældende lovgivning, som vi er underlagt</BodyText>
                        <Typography variant="h5" component="h4" gutterBottom>Ret til at begrænse behandlingen af personoplysninger</Typography>
                        <BodyText>Du har ret til, at vi begrænser behandlingen af personoplysninger om dig, hvis:</BodyText>
                        <BodyText>- du selv bestrider rigtigheden af personoplysningerne, i perioden indtil vi har haft mulighed for at fastslå, om personoplysningerne er korrekte.</BodyText>
                        <BodyText>- vi behandler personoplysninger om dig ulovlig, og du modsætter sig sletning af personoplysningerne og i stedet anmoder om, at anvendelse heraf begrænses.</BodyText>
                        <BodyText>- vi ikke længere har brug for personoplysningerne til behandlingen, men de er nødvendige for, at et retskrav kan fastlægges, gøres gældende eller forsvares; eller</BodyText>
                        <BodyText gutterBottom>- du har gjort indsigelse mod behandlingen af personoplysninger om dig på grundlag af din personlige situation, i perioden hvor det kontrolleres, om vores legitime interesser går forud for dine legitime interesser.</BodyText>
                        <BodyText>Hvis behandlingen begrænses, må personoplysninger om dig kun behandles med dit samtykke eller med henblik på, at retskrav kan fastlægges, gøres gældende eller forsvares eller for at beskytte en anden fysisk eller juridisk person eller af hensyn til EU’s eller en EU-medlemsstats vigtige samfundsmæssige interesser. Vi underretter dig, inden begrænsningen af behandlingen.</BodyText>
                        <Typography variant="h5" component="h4" gutterBottom>Ret til dataportabilitet</Typography>
                        <BodyText>Du har ret til at modtage personoplysninger om dig i et struktureret, almindelig anvendt og maskinlæsbart format, og ret til at overføre denne information til en anden dataansvarlig uden hindring fra os, hvis:</BodyText>
                        <BodyText gutterBottom>- behandlingen er baseret på dit samtykke eller er nødvendig for at forberede eller gennemføre en kontrakt mellem os, og behandlingen foretages automatisk.</BodyText>
                        <BodyText gutterBottom>Retten til dataportabilitet må ikke krænke andres rettigheder eller frihedsrettigheder.</BodyText>
                        <Typography variant="h5" component="h4" gutterBottom>Retten til at gøre indsigelse mod behandlingen af personoplysninger</Typography>
                        <BodyText gutterBottom>Du har ret til - af grunde, der vedrører din særlige situation - at gøre indsigelse mod behandling af personoplysninger, hvor hjemmelen er vores legitime interesser, som angivet ovenfor. Vi må derefter ikke længere behandle personoplysningerne, medmindre vi påviser vægtige, legitime grunde til behandlingen, der går forud for dine interesser, rettigheder og frihedsrettigheder, eller behandlingen er nødvendig for, at retskrav kan fastlægges, gøres gældende eller forsvares.</BodyText>
                        <BodyText gutterBottom>Hvis personoplysninger behandles med henblik på direkte markedsføring, har du til enhver tid ret til at gøre indsigelse mod behandlingen af personoplysninger om dig til sådan markedsføring, herunder at gøre indsigelse mod profilering i det omfang den vedrører direkte markedsføring. Hvis du gør indsigelse mod behandling med henblik på direkte markedsføring, må personoplysningerne ikke længere behandles til dette formål.</BodyText>
                        <BodyText gutterBottom>Du kan selv framelde dig elektronisk direkte markedsføring ved at følge frameldingsmetoden eller ved at klikke på frameldingslinket («Afmeld» sk."«Unsubscribe») i de modtagne meddelelser.</BodyText>
                        <Typography variant="h5" component="h4" gutterBottom>Ret til at klage til Datatilsynet</Typography>
                        <BodyText gutterBottom>Du har ret til at klage til Datatilsynet, hvis du oplever, at personoplysninger om dig behandles i strid med dine rettigheder efter databeskyttelsesreglerne.</BodyText>
                        <Typography variant="h5" component="h4" gutterBottom>Ret til at gøre indsigelse mod automatisk individuel beslutningstagning</Typography>
                        <BodyText gutterBottom>Hvis der er en anmærkning hos et kreditoplysningsbureau hos brugeren eller medansøgeren, afvises ansøgningen automatisk. Beslutningen er nødvendig i forbindelse med indgåelse af en senere kreditaftale med en af de samarbejdende kreditgivere. Registrerede har ret til menneskelig indgriben fra den dataansvarliges side og til at komme med sine synspunkter og til at bestride afgørelsen.</BodyText>
                        <Typography variant="h4" component="h3" gutterBottom>Hvorfra indsamler vi personoplysninger om dig?</Typography>
                        <BodyText>Personoplysningerne bliver for det meste indhentet direkte fra dig, når du besøger og bruger vores hjemmeside, f.eks. ved at bruge og udfylde ansøgningsskemaet og andre webformularer og tjenester.</BodyText>
                        <Typography variant="h4" component="h3" gutterBottom>Hvordan sikrer vi at datbeskyttelsen for den enkelte varetages ved behandling af personoplysninger?</Typography>
                        <BodyText gutterBottom>Personoplysninger, som behandles elektronisk i databasen, er beskyttet af firewalls, kodeord og andre sikkerhedskomponenter, som tilsammen udgør passende sikkerhedstiltag.</BodyText>
                        <BodyText gutterBottom>Dokumentation som indeholder personoplysninger i papirform er beskyttet mod uautoriseret adgang.</BodyText>
                        <BodyText gutterBottom>Kun den udpegede sagsansvarlige, de tilknyttede medarbejdere og sagsbehandlerne på sagsområdet har tilgang til personoplysningerne.</BodyText>
                        <Typography variant="h4" component="h3" gutterBottom>Hvilke andre virksomheder kan få adgang til dine personoplysninger?</Typography>
                        <Typography variant="h5" component="h4" gutterBottom>Lovgrundlag:</Typography>
                        <BodyText gutterBottom>Vores behandling af dine personoplysninger er nødvendig for, at vi kan forfølge vores legitime interesse i at markedsføre vores tjenester til dig, og vi har vurderet, at dine interesser eller grundlæggende rettigheder og frihedsrettigheder ikke går forud for denne legitime interesse, jf. databeskyttelsesforordningens artikel 6, stk. 1, litra f.</BodyText>
                        <BodyText gutterBottom>Du har ret til at gøre indsigelse mod behandlingen: Du har ret til at – af grunde, der vedrører din særlige situation – at gøre indsigelse mod behandling af personoplysninger, hvor hjemlen er artikel 6, stk. 1, litra e) eller f), herunder profilering baseret på disse bestemmelser. daniiel.dev må derefter ikke længere behandle personoplysningerne, medmindre daniiel.dev påviser vægtige legitime grunde til behandlingen, der går forud for dine interesser, rettigheder og frihedsrettigheder, eller behandlingen er nødvendig for, at retskrav kan fastlægges, gøres gældende eller forsvares.</BodyText>
                        <BodyText gutterBottom>Hvis personoplysninger behandles med henblik på direkte markedsføring, har du til enhver tid ret til at gøre indsigelse mod behandlingen af dine personoplysninger til sådan markedsføring, herunder at gøre indsigelse mod profilering, i det omfang den vedrører direkte markedsføring. Hvis du gør indsigelse mod behandling med henblik på direkte markedsføring, må personoplysningerne ikke længere behandles til dette formål.</BodyText>
                        <BodyText gutterBottom>Opbevaringsperiode: Vi behandler dine oplysninger til dette formål, så længe du har en aktiv låneansøgning eller aktive lånetilbud. Vi sletter alle oplysninger efter 18 måneder, når dit forhold til Morebanker anses for afsluttet. Hvis du får et lånetilbud, anses dit forhold til Morebanker for afsluttet 18 måneder efter, du har foretaget sammenligning af lånetilbuddene. Hvis du ikke får nogen lånetilbud, anses dit forhold til daniiel.dev for afsluttet 12 måneder efter, du har foretaget sammenligning af lånetilbuddene.</BodyText>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default privatlivspolitik
