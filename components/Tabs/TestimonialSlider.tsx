import { Grid, Typography } from "@mui/material"
import { TabContext, TabPanel } from '@mui/lab';
import Image from 'next/image'
import { useState } from "react";
import Avatar from '../../assets/images/avatar.svg'
import BodyText from "../Typography/BodyText"

const TestimonialSlider = () => {
    const [tabIndex, setTabIndex] = useState(0)

    return (
        <div>
            <TabContext value={tabIndex.toString()} >
                <TabPanel value={"0"} sx={{p: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%'}}>
                    <Grid container spacing={4}>
                        <Grid item md={4} display="grid">
                            <Image src={Avatar} layout="responsive" width={250} height={250} />
                        </Grid>
                        <Grid item md={8} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <BodyText gutterBottom>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl purus in mollis nunc sed. Amet nisl purus in mollis nunc sed</BodyText>
                            <Typography variant="h4">Mark Andersen</Typography>
                            <Typography variant="subtitle1">CEO, Admill</Typography>
                        </Grid>
                    </Grid>
                </TabPanel>
            </TabContext>
        </div>
    )
}

export default TestimonialSlider
