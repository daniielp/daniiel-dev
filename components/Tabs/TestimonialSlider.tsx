import { Grid, Typography, Theme, Tabs, Tab } from "@mui/material"
import { TabContext, TabPanel } from '@mui/lab';
import makeStyles from '@mui/styles/makeStyles';
import Image from 'next/image'
import { useState } from "react";
import Avatar from '../../assets/images/avatar.svg'
import BodyText from "../Typography/BodyText"

const useStyles = makeStyles((theme: Theme) => ({
    placement: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    noSpacing: {
        padding: theme.spacing(0),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%'
    },
    Indicator: {
        bottom: 'unset',
        top: 0,
        height: 10,
    },
    tab: {
        borderTop: '10px solid' + theme.palette.grey[500],
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
    }
}))

const TestimonialSlider = () => {
    const classes = useStyles();
    const [tabIndex, setTabIndex] = useState(0)

    const handleChange = (_event: any, newIndex: React.SetStateAction<number>) => {
        setTabIndex(newIndex);
    }

    return (
        <div>
            <TabContext value={tabIndex.toString()} >
                <TabPanel value={"0"} className={classes.noSpacing}>
                    <Grid container spacing={4}>
                        <Grid item md={4} display="grid">
                            <Image src={Avatar} layout="responsive" width={250} height={250} />
                        </Grid>
                        <Grid item md={8} className={classes.placement}>
                            <BodyText gutterBottom>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl purus in mollis nunc sed. Amet nisl purus in mollis nunc sed</BodyText>
                            <Typography variant="h4">Mark Andersen</Typography>
                            <Typography variant="subtitle1">CEO, Admill</Typography>
                        </Grid>
                    </Grid>
                </TabPanel>
                {/* <TabPanel value={"1"}>
                    <Grid container spacing={4}>
                        <Grid item md={4} display="grid">
                            <Image src={Avatar} layout="responsive" width={250} height={250} />
                        </Grid>
                        <Grid item md={8} className={classes.placement}>
                            <BodyText gutterBottom>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl purus in mollis nunc sed. Amet nisl purus in mollis nunc sed</BodyText>
                            <Typography variant="h4">***</Typography>
                            <Typography variant="subtitle1">***, *****</Typography>
                        </Grid>
                    </Grid>
                </TabPanel> */}
            </TabContext>
            {/* <Grid container spacing={4}>
                <Grid item md={4}>

                </Grid>
                <Grid item md={8}>
                    <Tabs value={tabIndex} onChange={handleChange} classes={{ indicator: classes.Indicator }}>
                        <Tab label="Mark Andersen" className={classes.tab}></Tab>
                    </Tabs>
                </Grid> 
            </Grid> */}
        </div>
    )
}

export default TestimonialSlider
