import {Box, Container, Grid, Tab, Tabs, Typography} from '@mui/material';
import TextBundle from '../Typography/TextBundle'
import React, { useState } from 'react'
import { TabContext, TabPanel } from '@mui/lab';
import BodyText from '../Typography/BodyText';



const Skills = () => {
    const [tabIndex, setTabIndex] = useState(1);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setTabIndex(newValue);
    };

    return (
        <Box sx={{py: [5, 5, 10], bgcolor: 'secondary.dark'}}>
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item md={6} sx={{display: 'flex', flexDirection: ['column', 'column', 'column', 'row']}} >
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={tabIndex}
                            onChange={handleChange}
                            aria-label="Choose a skill"
                            allowScrollButtonsMobile
                            sx={{ borderRight: 1, borderColor: 'divider'}}
                        >
                            <Tab label="Kommunikation" sx={{color: 'white'}} />
                            <Tab label="Forståelse" sx={{color: 'white'}} />
                            <Tab label="UI/UX" sx={{color: 'white'}} />
                        </Tabs>
                        <TabContext value={tabIndex.toString()}>
                            <TabPanel value={"0"} sx={{width: '100%', height: '100%'}}>
                                <Grid container>
                                    <Grid item sm={12}>
                                        <Typography variant="h4" component="h4" gutterBottom>Kommunikation</Typography>
                                        <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl purus in mollis nunc sed. Eu turpis egestas pretium aenean pharetra. Porttitor leo a diam sollicitudin tempor id eu. Consequat interdum varius sit amet mattis vulputate enim nulla. </BodyText>
                                    </Grid>
                                </Grid>
                            </TabPanel>
                            <TabPanel value={"1"} sx={{width: '100%', height: '100%'}}>
                                <Grid container>
                                    <Grid item sm={12}>
                                    <Typography variant="h4" component="h4" gutterBottom>Forståelse</Typography>
                                        <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl purus in mollis nunc sed. Eu turpis egestas pretium aenean pharetra. Porttitor leo a diam sollicitudin tempor id eu. Consequat interdum varius sit amet mattis vulputate enim nulla. </BodyText>
                                    </Grid>
                                </Grid>
                            </TabPanel>
                            <TabPanel value={"2"} sx={{width: '100%', height: '100%'}}>
                                <Grid container>
                                    <Grid item sm={12}>
                                    <Typography variant="h4" component="h4" gutterBottom>UI/UX</Typography>
                                        <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl purus in mollis nunc sed. Eu turpis egestas pretium aenean pharetra. Porttitor leo a diam sollicitudin tempor id eu. Consequat interdum varius sit amet mattis vulputate enim nulla. </BodyText>
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
