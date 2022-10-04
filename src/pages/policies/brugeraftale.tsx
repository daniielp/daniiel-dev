import {Container, Grid, Typography, Box} from '@mui/material';
import BodyText from '../../components/Typography/BodyText';

function brugeraftale() {

    return (
        <Box component="section" sx={{bgcolor: 'secondary.dark', py: [5, 5, 10]}}>
            <Container maxWidth="lg">
                <Grid container>
                    {/* <Grid item md={3}>
                        
                    </Grid> */}
                    <Grid item md={12} id="tosSearch">
                        <Typography variant="h3" component="h2" gutterBottom>Brugeraftale</Typography>
                        <BodyText gutterBottom>Denne hjemmeside tilhører Daniel Bøgh Pedersen. Denne privatlivspolitik informerer personer, som besøger og anvender hjemmesiden daniiel.dev («Tjenesten»).</BodyText>
                        <Typography variant="h4" component="h3" gutterBottom>Dit ansvar</Typography>
                        <BodyText gutterBottom>Som bruger af daniiel.dev tjeneste er du ansvarlig for, at alle informationer, som du giver til daniiel.dev, er korrekte. Du er også ansvarlig for, at din brug af daniiel.dev tjenester ikke er i strid med disse vilkår og gældende ret.</BodyText>
                        <Typography variant="h4" component="h3" gutterBottom>Ansvarsfraskrivelse</Typography>
                        <BodyText>Daniiel.dev er ikke ansvarlig for tab, der skyldes IT-nedbrud eller ødelæggelse af data i forbindelse med lovindgreb eller forvaltningsakter, hacking, computervirus, sabotage, naturkatastrofer, uroligheder, terror, hærværk, strejke, blokade, boykot eller andre forhold, der uden for daniiel.dev kontrol.</BodyText>
                        <Typography variant="h4" component="h3" gutterBottom>Lovvalg og værneting</Typography>
                        <BodyText gutterBottom>Disse vilkår og betingelser er underlagt dansk ret, og alle uoverensstemmelser, der måtte opstå i forbindelse med fortolkningen af Vilkårene eller brugen af daniiel.dev hjemmeside, Tjenesten og andre ydelser skal afgøres i overensstemmelse med dansk ret og ved byretten i København.</BodyText>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default brugeraftale
