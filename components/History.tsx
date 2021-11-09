import { Container, Grid, Link } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles'
import TextBundle from './Typography/TextBundle'
import { useState } from 'react'
import Image from 'next/image'
import HistoryImage from '../assets/images/history.svg'

const useStyles = makeStyles((theme: Theme) => ({
    grow: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),

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

const Hero = () => {
    const classes = useStyles();
    const [index, setIndex] = useState(0);

    return (
        <section className={classes.grow}>
            <Container maxWidth="lg">

                <Grid container spacing={5}>
                    <Grid item md={6}>
                        <TextBundle title="Hvorfor hedder min side Daniiel?" subtitle="Historien bag" text="For at gøre en lang historie kort, så kom navnet Daniiel fra en stavefejl langt langt tilbage. Men nu hvor det er ude af verden, så lad og lige dygge en smule mere ned I det. Man har sikkert selv oplevet med med at ens tastatur kan komme til enten at springe et bogstav over er nogle gange skrive dobbelt, og da jeg tilbage I tidernes morgen skulle oprette mig på diverste sociale medier, lagde jeg ikke lige mærke til der var et ekstra I, og fandt så ud af det senere. Men nu hvor det er så svært at finde navn og domainer rundt omkring valgte jeg at lave et brand omkring min stavefejl. Så det er derfor jeg har det nu." />
                    </Grid>
                    <Grid item md={6}>
                        <Image src={HistoryImage} alt="history" width={556} height={556} />
                    </Grid>
                </Grid>

            </Container>
        </section>
    );
}

export default Hero
