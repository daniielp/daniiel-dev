import { Grid, Typography, Theme } from "@mui/material"
import makeStyles from '@mui/styles/makeStyles';
import Image from 'next/image'
import Avatar from '../assets/images/avatar.svg'
import BodyText from "./Typography/BodyText"

const useStyles = makeStyles((theme: Theme) => ({
    placement: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }
}))

const TestimonialSlider = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={4}>
            <Grid item md={4} display="grid">
                <Image src={Avatar} layout="responsive" width={250} height={250}/>
            </Grid>
            <Grid item md={8} className={classes.placement}>
                <BodyText gutterBottom>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl purus in mollis nunc sed. Amet nisl purus in mollis nunc sed</BodyText>
                <Typography variant="h4">Mark Andersen</Typography>
                <Typography variant="subtitle1">CEO, Admill</Typography>
            </Grid>
        </Grid>
    )
}

export default TestimonialSlider
