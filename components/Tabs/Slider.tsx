import { Container, Grid, Tab, Tabs, Typography, Hidden } from '@mui/material';
import { Theme } from '@mui/material/styles'
import TextBundle from '../Typography/TextBundle'
import React, { useState } from 'react'
import { Box } from '@mui/material'
import { Breadcrumbs } from '@mui/material'
import { TabContext, TabPanel } from '@mui/lab';


const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleChange = (_event: any, newIndex: React.SetStateAction<number>) => {
        setIndex(newIndex);
    }

    return (
        <Box sx={{py: [5, 5, 10], bgcolor: 'secondary.dark' }} component="section">
            <Container maxWidth="lg">
                <TabContext value={index.toString()}>
                    <TabPanel value={"0"} sx={{p: 0}}>
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
                    <TabPanel value={"1"} sx={{p: 0}}>
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
                    <TabPanel value={"2"} sx={{p: 0}}>
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
                <Box display="flex" sx={{display: 'flex', pt: 5}}>
                    <Hidden mdDown>
                        <Breadcrumbs sx={{color: 'text.primary', typography: 'h4'}}>
                            <Typography variant="h4" component="p" sx={{color: 'primary.main'}}>{index + 1}</Typography>
                            <Typography variant="h4" component="p">3</Typography>
                        </Breadcrumbs>
                    </Hidden>
                    <Tabs value={index} onChange={handleChange} TabIndicatorProps={{style: {bottom: 'unset', top: 0, height: 10}}} indicatorColor="primary" textColor="primary" variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile>
                        <Tab label="Introduktion" sx={{borderTop: 10, borderColor: (theme : Theme) => theme.palette.grey[500], mx: 2}}></Tab>
                        <Tab label="Historien bag" sx={{borderTop: 10, borderColor: (theme : Theme) => theme.palette.grey[500], mx: 2}}></Tab>
                        <Tab label="Kontakt" sx={{borderTop: 10, borderColor: (theme : Theme) => theme.palette.grey[500], mx: 2}}></Tab>
                    </Tabs>
                </Box>
            </Container>
        </Box>
    );
}

export default Slider
