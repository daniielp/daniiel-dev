import { Container, Grid, Tab, Tabs, Box, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles'
import TextBundle from './Typography/TextBundle'
import React, { useState } from 'react'
import { TabContext, TabPanel } from '@mui/lab';
import BodyText from './Typography/BodyText';


const useStyles = makeStyles((theme: Theme) => ({
    grow: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        backgroundColor: theme.palette.secondary.dark,

        [theme.breakpoints.down('md')]: {
            paddingTop: theme.spacing(5),
            paddingBottom: theme.spacing(5),
        }
    },
    Indicator: {
        bottom: 'unset',
        top: 0,
        height: 10,
    },
    Tab: {
        borderTop: '10px solid' + theme.palette.grey[500],
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
    },
    breadcrumb: {
        color: theme.palette.text.primary,
        fontSize: theme.typography.h4.fontSize,
    },
    highlighted: {
        color: theme.palette.primary.main
    },
    noPadding: {
        padding: 0,
    },
    controls: {
        display: 'flex',
        paddingTop: theme.spacing(5),
    }
}))

const Skills = () => {
    const classes = useStyles();
    const [tabIndex, setTabIndex] = useState(1);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabIndex(newValue);
    };

    return (
        <section className={classes.grow}>
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item md={6} sx={{ display: 'flex' }}>
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={tabIndex}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            sx={{ borderRight: 1, borderColor: 'divider' }}
                        >
                            <Tab label="Kommunikation skills" sx={{color: 'white'}} />
                            <Tab label="Forståelse skills" sx={{color: 'white'}} />
                            <Tab label="Styring skills" sx={{color: 'white'}} />
                        </Tabs>
                        <TabContext value={tabIndex.toString()}>
                            <TabPanel value={"0"} sx={{width: '100%', height: '100%'}}>
                                <Grid container>
                                    <Grid item sm={12}>
                                        <Typography variant="h4" component="h4">Kommunikation</Typography>
                                        <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl purus in mollis nunc sed. Eu turpis egestas pretium aenean pharetra. Porttitor leo a diam sollicitudin tempor id eu. Consequat interdum varius sit amet mattis vulputate enim nulla. </BodyText>
                                    </Grid>
                                </Grid>
                            </TabPanel>
                            <TabPanel value={"1"} sx={{width: '100%', height: '100%'}}>
                                <Grid container>
                                    <Grid item sm={12}>
                                    <Typography variant="h4" component="h4">Forståelse</Typography>
                                        <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl purus in mollis nunc sed. Eu turpis egestas pretium aenean pharetra. Porttitor leo a diam sollicitudin tempor id eu. Consequat interdum varius sit amet mattis vulputate enim nulla. </BodyText>
                                    </Grid>
                                </Grid>
                            </TabPanel>
                            <TabPanel value={"2"} sx={{width: '100%', height: '100%'}}>
                                <Grid container>
                                    <Grid item sm={12}>
                                    <Typography variant="h4" component="h4">Styring</Typography>
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
        </section>
    );
}

export default Skills
