import { Grid, Typography, Tabs, Tab } from "@mui/material"
import { TabContext, TabPanel } from '@mui/lab';
import Image from 'next/image'
import { useState } from "react";
import Avatar from '../../assets/images/avatar.svg'
import BodyText from "../Typography/BodyText"
import { Theme } from "@mui/material/styles";

const TestimonialSlider = () => {
    const [tabIndex, setTabIndex] = useState(1)

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setTabIndex(newValue);
    };

    return (
        <>
            <TabContext value={tabIndex.toString()} >
                <TabPanel value={"0"} sx={{ p: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                    <Grid container spacing={4}>
                        <Grid item md={4} display="grid">
                            <Image src={Avatar} layout="responsive" width={250} height={250} alt="Mark Andersen Avatar" />
                        </Grid>
                        <Grid item md={8} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <BodyText gutterBottom>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</BodyText>
                            <Typography variant="h4">Mark Andersen</Typography>
                            <Typography variant="subtitle1">CEO, Admill</Typography>
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={"1"} sx={{ p: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                    <Grid container spacing={4}>
                        <Grid item md={4} display="grid">
                            <Image src={Avatar} layout="responsive" width={250} height={250} alt="Jakob Kjeldtoft Avatar" />
                        </Grid>
                        <Grid item md={8} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <BodyText gutterBottom>"Jeg er meget imponeret over din refleksioner – det er virkelig godt arbejde. Du har fat i det helt rigtige..."</BodyText>
                            <Typography variant="h4">Jakob Kjeldtoft</Typography>
                            <Typography variant="subtitle1">Udvikler, Novicell</Typography>
                        </Grid>
                    </Grid>
                </TabPanel>
                <Grid container sx={{pt: 4}}>
                    <Tabs value={tabIndex} onChange={handleChange} sx={{ pt: 2 }} TabIndicatorProps={{ style: { bottom: 'unset', top: 0, height: 10 } }} indicatorColor="primary" textColor="primary" variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile>
                        <Tab label="Admill" sx={{ borderTop: 10, borderColor: (theme: Theme) => theme.palette.grey[500], mx: 2 }} />
                        <Tab label="Novicell" sx={{ borderTop: 10, borderColor: (theme: Theme) => theme.palette.grey[500], mx: 2 }} />
                    </Tabs>

                </Grid>
            </TabContext>
        </>
    )
}

export default TestimonialSlider
