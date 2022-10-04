import {Box, Container, Grid} from '@mui/material';
import TextBundle from './Typography/TextBundle'
import Image from 'next/image'
import HistoryImage from '../assets/images/history.svg'


const Hero = () => {

    return (
        <Box sx={{py: [5, 5, 10]}} id="historien">
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
        </Box>
    );
}

export default Hero
