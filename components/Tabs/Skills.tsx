import { Box, Container, Grid, Tab, Tabs, Typography } from '@mui/material';
import TextBundle from '../Typography/TextBundle'
import React, { useState } from 'react'
import { TabContext, TabPanel } from '@mui/lab';
import BodyText from '../Typography/BodyText';



const Skills = () => {
    const [tabIndex, setTabIndex] = useState(2);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setTabIndex(newValue);
    };

    return (
        <Box sx={{ py: [5, 5, 10], bgcolor: 'secondary.dark' }}>
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item md={6} sx={{ display: 'flex', flexDirection: ['column', 'column', 'column', 'row'] }} >
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={tabIndex}
                            onChange={handleChange}
                            aria-label="Choose a skill"
                            allowScrollButtonsMobile
                            sx={{ borderRight: 1, borderColor: 'divider' }}
                        >
                            <Tab label="Kommunikation" sx={{ color: 'white' }} />
                            <Tab label="UI/UX" sx={{ color: 'white' }} />
                            <Tab label="Analytics" sx={{ color: 'white' }} />
                        </Tabs>
                        <TabContext value={tabIndex.toString()}>
                            <TabPanel value={"0"} sx={{ width: '100%', height: '100%' }}>
                                <Grid container>
                                    <Grid item sm={12}>
                                        <Typography variant="h4" component="h4" gutterBottom>Kommunikation</Typography>
                                        <BodyText>En vigtig del for mig når det kommer til at være udvikler, er at kunne kommunikere med hinaden. Da jeg tit ser at de fleste fejl opstår ved mangel på kommunikation. Og har derfor brugt tid på at lære UML (Unified Modeling Language) til at kunne viste designet af systemet.</BodyText>
                                    </Grid>
                                </Grid>
                            </TabPanel>
                            <TabPanel value={"1"} sx={{ width: '100%', height: '100%' }}>
                                <Grid container>
                                    <Grid item sm={12}>
                                        <Typography variant="h4" component="h4" gutterBottom>UI/UX</Typography>
                                        <BodyText>UI/UX for mig er en grundsten når det kommer til hjemmesider. Man kan ikke bygge nogen succesfuld hjemmeside, uden at have tænke over hvordan brugerne kommer til at benytte siden og hvordan man kan optimere det.</BodyText>
                                    </Grid>
                                </Grid>
                            </TabPanel>
                            <TabPanel value={"2"} sx={{ width: '100%', height: '100%' }}>
                                <Grid container>
                                    <Grid item sm={12}>
                                        <Typography variant="h4" component="h4" gutterBottom>Analytics</Typography>
                                        <BodyText>Hvordan skal man kunne optimere sin side uden data? Det er der analytics software som Google Analytics kommer ind i billedet. Der har jeg blandt andet arbejdet med at måle på de ting der giver mening for ens virksomhed. Alt fra interaktioner til hvilke devices brugerne befinder sig på.</BodyText>
                                    </Grid>
                                </Grid>
                            </TabPanel>
                        </TabContext>
                    </Grid>
                    <Grid item md={6}>
                        <TextBundle title="Åbent samarbejde" subtitle="Skills" text="En af de vigtigeste egenskaber for en udvikler, er at kunne kommunikerer med andre mennesker. Og få omsat deres tanker til kodning og kunne forklare sin process." />
                    </Grid>
                </Grid>

            </Container>
        </Box>
    );
}

export default Skills
