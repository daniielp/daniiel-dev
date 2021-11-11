import { Container, Grid, Link, Tab, Tabs, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles'
import TextBundle from './typography/TextBundle'
import { TabContext, TabPanel } from '@mui/lab';
import { useState } from 'react'
import BodyText from './typography/BodyText'

const useStyles = makeStyles((theme: Theme) => ({
    grow: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),

        [theme.breakpoints.down('md')]: {
            paddingTop: theme.spacing(5),
            paddingBottom: theme.spacing(5),
        }
    },
    introduction: {
        backgroundColor: theme.palette.secondary.dark,
        padding: theme.spacing(2)
    },
    description: {
        padding: theme.spacing(2),
        borderTop: "2px solid " + theme.palette.primary.main,
        borderRight: "2px solid " + theme.palette.primary.main,
        borderBottom: "2px solid " + theme.palette.primary.main,

        [theme.breakpoints.down('md')]: {
            borderLeft: "2px solid " + theme.palette.primary.main,
        }
    },
    highlight: {
        fontWeight: 'bold',
        color: theme.palette.primary.main,
    },
    mobileReverse: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

        [theme.breakpoints.down('sm')]: {
            flexDirection: "column-reverse",
        }
    },
    Indicator: {
        bottom: 'unset',
        top: 0,
        height: 10,
    },
    tabs: {
        paddingTop: theme.spacing(2),
    }
}))

const Hero = () => {
    const classes = useStyles();
    const [tabIndex, setTabIndex] = useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setTabIndex(newValue);
    };

    return (
        <section className={classes.grow}>
            <Container maxWidth="lg">

                <Grid container spacing={5}>
                    <Grid item md={6}>
                        <TextBundle title="Virksomheder jeg har arbejdet med" subtitle="Erfaring" text="Som udvikler er det vigtigt at du har kendskab til hvad for nogle teknologier der bliver brugt ude I virksomhederne, og har et kendskab til hvordan du kan Performance Optimize, og Hvordan du kan nå I mål med de målsætninger virksomhederne sætter." />
                        <Link href="/omkring" underline="hover">
                            Se mere
                        </Link>
                    </Grid>
                    <Grid item md={6} className={classes.mobileReverse}>
                        <TabContext value={tabIndex.toString()}>
                            <TabPanel value="0" sx={{padding: 0}}>
                                <Grid container spacing={0}>
                                    <Grid item md={6} className={classes.introduction}>
                                        <Typography variant="h6" component="h4">Fullstack udvikler</Typography>
                                        <Typography variant="subtitle1" component="h4">Admill.dk</Typography>
                                        <BodyText>Hos admill var jeg en del af et større team, som havde til ansvar at holde styr på deres I alt 20+ sider.</BodyText>
                                    </Grid>
                                    <Grid item md={6} className={classes.description}>
                                        <Typography variant="h6" component="h4" gutterBottom>Udviklingsværktøjer</Typography>
                                        <Typography variant="body2">En stor del af det vi arbejdede med hos Admill var været med <Typography variant="body2" component="span" className={classes.highlight}>ASP.NET MVC</Typography>, både indenfor at <Typography variant="body2" component="span" className={classes.highlight}>Performance Optimize</Typography>, tilføjelse af <Typography variant="body2" component="span" className={classes.highlight}>ekstra funktionaliteter</Typography> indenfor <Typography variant="body2" component="span" className={classes.highlight}>SEO</Typography> og <Typography variant="body2" component="span" className={classes.highlight}>Content writing/creation</Typography>. Dertil har jeg også arbejdet med <Typography variant="body2" component="span" className={classes.highlight}>React</Typography> og styring af states til <Typography variant="body2" component="span" className={classes.highlight}>multistep forms</Typography>, og til <Typography variant="body2" component="span" className={classes.highlight}>administrationspaneler</Typography>.</Typography>
                                    </Grid>
                                </Grid>
                            </TabPanel>
                            <TabPanel value="1" sx={{padding: 0}}>
                                <Grid container spacing={0}>
                                    <Grid item md={6} className={classes.introduction}>
                                        <Typography variant="h6" component="h4">Skoleprojekt (UI/UX)</Typography>
                                        <Typography variant="subtitle1" component="h4">Novicell.dk</Typography>
                                        <BodyText>Som en del af mit skoleprojekt som webudvikler. Fik jeg til opgave at skulle redesign deres side.</BodyText>
                                    </Grid>
                                    <Grid item md={6} className={classes.description}>
                                        <Typography variant="h6" component="h4" gutterBottom>Udviklingsværktøjer</Typography>
                                        <Typography variant="body2">En stor del af det forløb bestod i <Typography variant="body2" component="span" className={classes.highlight}>UI/UX</Typography>, med både at komme op med nogle nye <Typography variant="body2" component="span" className={classes.highlight}>komponenter</Typography>. Dertil fik jeg også arbejdet med design programmet <Typography variant="body2" component="span" className={classes.highlight}>Adobe XD</Typography>.</Typography>
                                    </Grid>
                                </Grid>
                            </TabPanel>
                        </TabContext>
                        <Tabs value={tabIndex} classes={{ indicator: classes.Indicator }} className={classes.tabs} onChange={handleChange} allowScrollButtonsMobile>
                            <Tab label="Admill" />
                            <Tab label="Novicell" />
                        </Tabs>
                    </Grid>
                </Grid>

            </Container>
        </section>
    );
}

export default Hero
