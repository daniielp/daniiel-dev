import { Container, Grid, makeStyles, Tab, Tabs, Typography, Hidden } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles'
import TextBundle from './Typography/TextBundle'
import React, { useState } from 'react'
import { Box } from '@material-ui/core'
import { Breadcrumbs } from '@material-ui/core'
import { TabContext, TabPanel } from '@material-ui/lab';

const useStyles = makeStyles((theme: Theme) => ({
    grow: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        backgroundColor: theme.palette.secondary.dark,

        [theme.breakpoints.down('sm')]: {
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

const Slider = () => {
    const classes = useStyles();
    const [index, setIndex] = useState(0);
    // const [storage, setStorage] = useLocalStorage('slider', 0);

    const handleChange = (_event: any, newIndex: React.SetStateAction<number>) => {
        setIndex(newIndex);
    }

    return (
        <section className={classes.grow}>
            <Container maxWidth="lg">
                <TabContext value={index.toString()}>
                    <TabPanel value={"0"} className={classes.noPadding}>
                        <Grid container spacing={5}>
                            <Grid item md={6}>
                                <TextBundle title="UI/UX Designer og Developer, baseret i Aarhus." subtitle="Introduktion" text="Med en kombination af uddannelsen som webudvikler, og med et skarpt øje for design og UI/UX, skaber vækst og gør mig i stand til at arbejde helhjertet med frontend-development. På den måde styrker jeg brandets position med at være de bedste når det kommer til frontend-development, og samtidig skaber værdifulde resultater, som i sidste ende giver bedre købeklare leads." />
                                {/* <Link href="/omkring">
                                    <Button variant="text" color="primary" endIcon={<ArrowForwardIosIcon />}>Min historie</Button>
                                </Link> */}
                            </Grid>
                            <Grid item md={6}>
                                <Typography variant="h1" component="h1" >Daniel</Typography>
                                <Typography variant="h1" component="h1" color="primary" >Pedersen</Typography>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={"1"} className={classes.noPadding}>
                        <Grid container spacing={5}>
                            <Grid item md={6}>
                                <TextBundle title="Hedder du rigtigt Daniiel med dobbelt i?" subtitle="Historien bag" text="Med en kombination af uddannelsen som webudvikler, og med et skarpt øje for design og UI/UX, skaber vækst og gør mig i stand til at arbejde helhjertet med frontend-development. På den måde styrker jeg brandets position med at være de bedste når det kommer til frontend-development, og samtidig skaber værdifulde resultater, som i sidste ende giver bedre købeklare leads." />
                            </Grid>
                            <Grid item md={6}>
                                <Typography variant="h1" component="h1">Daniel</Typography>
                                <Typography variant="h1" component="h1" color="primary">Pedersen</Typography>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={"2"} className={classes.noPadding}>
                        <Grid container spacing={5}>
                            <Grid item md={6}>
                                <TextBundle title="Du er altid velkommen til at kontakte mig" subtitle="Kontakt" text="Med en kombination af uddannelsen som webudvikler, og med et skarpt øje for design og UI/UX, skaber vækst og gør mig i stand til at arbejde helhjertet med frontend-development. På den måde styrker jeg brandets position med at være de bedste når det kommer til frontend-development, og samtidig skaber værdifulde resultater, som i sidste ende giver bedre købeklare leads." />
                            </Grid>
                            <Grid item md={6}>
                                <Typography variant="h1" component="h1">Daniel</Typography>
                                <Typography variant="h1" component="h1" color="primary">Pedersen</Typography>
                            </Grid>
                        </Grid>
                    </TabPanel>
                </TabContext>
                <Box display="flex" className={classes.controls}>
                    <Hidden smDown>
                        <Breadcrumbs className={classes.breadcrumb}>
                            <Typography variant="h4" component="p" className={classes.highlighted}>{index + 1}</Typography>
                            <Typography variant="h4" component="p">3</Typography>
                        </Breadcrumbs>
                    </Hidden>
                    <Tabs value={index} onChange={handleChange} classes={{ indicator: classes.Indicator }} indicatorColor="primary" textColor="primary" variant="scrollable" scrollButtons="auto">
                        <Tab label="Introduktion" className={classes.Tab}></Tab>
                        <Tab label="Historien bag" className={classes.Tab}></Tab>
                        <Tab label="Kontakt" className={classes.Tab}></Tab>
                    </Tabs>
                </Box>
            </Container>
        </section>
    )
}

export default Slider
