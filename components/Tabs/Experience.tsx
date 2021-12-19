import {Box, Container, Grid, Link, Tab, Tabs, Typography} from '@mui/material';
import TextBundle from '../Typography/TextBundle'
import { TabContext, TabPanel } from '@mui/lab';
import { useState } from 'react'
import BodyText from '../Typography/BodyText'
import {Theme} from "@mui/material/styles";

const Hero = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setTabIndex(newValue);
    };

    return (
        <Box sx={{py: [5, 5, 10]}}>
            <Container maxWidth="lg">

                <Grid container spacing={5}>
                    <Grid item md={6}>
                        <TextBundle title="Virksomheder jeg har arbejdet med" subtitle="Erfaring" text="Som udvikler er det vigtigt at du har kendskab til hvad for nogle teknologier der bliver brugt ude I virksomhederne, og har et kendskab til hvordan du kan Performance Optimize, og Hvordan du kan nå I mål med de målsætninger virksomhederne sætter." />
                        <Link href="/omkring" underline="hover">
                            Se mere
                        </Link>
                    </Grid>
                    <Grid item md={6} sx={{display: 'flex', flexDirection: ['column-reverse', 'column-reverse', 'column'], justifyContent: "center",}} >
                        <TabContext value={tabIndex.toString()}>
                            <TabPanel value="0" sx={{padding: 0}}>
                                <Grid container spacing={0}>
                                    <Grid item md={6} sx={{bgcolor: 'secondary.dark', p:2}}>
                                        <Typography variant="h6" component="h4">Fullstack udvikler</Typography>
                                        <Typography variant="subtitle1" component="h4">Admill.dk</Typography>
                                        <BodyText>Hos admill var jeg en del af et større team, som havde til ansvar at holde styr på deres I alt 20+ sider.</BodyText>
                                    </Grid>
                                    <Grid item md={6} sx={{p: 2, borderTop: 2, borderRight: 2, borderBottom: 2, borderColor: 'primary.main', borderLeft: [2, 2, 0]}}>
                                        <Typography variant="h6" component="h4" gutterBottom>Udviklingsværktøjer</Typography>
                                        <Typography variant="body2">En stor del af det vi arbejdede med hos Admill var været med <Typography variant="body2" component="span" sx={{fontWeight: 'bold', color: 'primary.main'}}>ASP.NET MVC</Typography>, både indenfor at <Typography variant="body2" component="span" sx={{fontWeight: 'bold', color: 'primary.main'}}>Performance Optimize</Typography>, tilføjelse af <Typography variant="body2" component="span" sx={{fontWeight: 'bold', color: 'primary.main'}}>ekstra funktionaliteter</Typography> indenfor <Typography variant="body2" component="span" sx={{fontWeight: 'bold', color: 'primary.main'}}>SEO</Typography> og <Typography variant="body2" component="span" sx={{fontWeight: 'bold', color: 'primary.main'}}>Content writing/creation</Typography>. Dertil har jeg også arbejdet med <Typography variant="body2" component="span" sx={{fontWeight: 'bold', color: 'primary.main'}}>React</Typography> og styring af states til <Typography variant="body2" component="span" sx={{fontWeight: 'bold', color: 'primary.main'}}>multistep forms</Typography>, og til <Typography variant="body2" component="span" sx={{fontWeight: 'bold', color: 'primary.main'}}>administrationspaneler</Typography>.</Typography>
                                    </Grid>
                                </Grid>
                            </TabPanel>
                            <TabPanel value="1" sx={{padding: 0}}>
                                <Grid container spacing={0}>
                                    <Grid item md={6} sx={{bgcolor: 'secondary.dark', p:2}}>
                                        <Typography variant="h6" component="h4">Skoleprojekt (UI/UX)</Typography>
                                        <Typography variant="subtitle1" component="h4">Novicell.dk</Typography>
                                        <BodyText>Som en del af mit skoleprojekt som webudvikler. Fik jeg til opgave at skulle redesign deres side.</BodyText>
                                    </Grid>
                                    <Grid item md={6} sx={{p: 2, borderTop: 2, borderRight: 2, borderBottom: 2, borderColor: 'primary.main', borderLeft: [2, 2, 0]}}>
                                        <Typography variant="h6" component="h4" gutterBottom>Udviklingsværktøjer</Typography>
                                        <Typography variant="body2">En stor del af det forløb bestod i <Typography variant="body2" component="span" sx={{fontWeight: 'bold', color: 'primary.main'}}>UI/UX</Typography>, med både at komme op med nogle nye <Typography variant="body2" component="span" sx={{fontWeight: 'bold', color: 'primary.main'}}>komponenter</Typography>. Dertil fik jeg også arbejdet med design programmet <Typography variant="body2" component="span" sx={{fontWeight: 'bold', color: 'primary.main'}}>Adobe XD</Typography>.</Typography>
                                    </Grid>
                                </Grid>
                            </TabPanel>
                        </TabContext>
                        <Tabs value={tabIndex} onChange={handleChange} sx={{pt: 2}} TabIndicatorProps={{style: {bottom: 'unset', top: 0, height: 10}}} indicatorColor="primary" textColor="primary" variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile>
                            <Tab label="Admill" sx={{borderTop: 10, borderColor: (theme : Theme) => theme.palette.grey[500], mx: 2}}/>
                            <Tab label="Novicell" sx={{borderTop: 10, borderColor: (theme : Theme) => theme.palette.grey[500], mx: 2}}/>
                        </Tabs>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    );
}

export default Hero
