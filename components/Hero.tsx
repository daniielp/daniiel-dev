import { Box, Container, Grid, Link, Theme } from '@mui/material';
import { styled } from "@mui/material/styles";
import TextBundle from './Typography/TextBundle';

import Browser from '../assets/images/browser.svg';
import HeroImage from '../assets/images/Hero.svg';
import NewsletterImage from '../assets/images/Newsletter.svg';
import { keyframes } from '@emotion/react'

const floating = keyframes`
0% {
    transform: translateY(0) translateZ(0);
    filter: drop-shadow(0 -1px 1px rgba(255,255,255,.25)) drop-shadow(20px 10px 20px rgba(245,208,39,.25))
}

to {
    transform: translateY(-20px) translateZ(100px);
    filter: drop-shadow(0 -1px 1px rgba(255,255,255,.25)) drop-shadow(40px 40px 20px rgba(245,208,39,.15))
}
    `;

const AnimationContainer = styled("div")(({ theme }) => ({
    transition: "transform .5s ease-in-out",
    width: "100%",
    height: "100%",
    position: "relative",
    transformStyle: "preserve-3d",
    [theme.breakpoints.up("sm")]: {
        transform: "perspective(2000px) rotateX(8deg) rotateY(-38deg) rotate(6deg)",
    },
}))

const AnimationBackground = styled("div")(({
    "& img": {
        width: "100%",
        height: "100%",
    }
}))

const AnimationElement = styled("div")(({ theme }) => ({
    filter: "drop-shadow(0 -1px 1px rgba(255,255,255,.25)) drop-shadow(20px 10px 20px rgba(245,208,39,.25))",
    width: "90%",
    height: "200px",
    position: "absolute",
    top: "15%",
    left: "5%",
    transform: "translateY(0) translateZ(0)",
    animation: `${floating} 7s infinite`,
    animationTimingFunction: "ease-in-out",
    animationDirection: "alternate",
    animationDelay: "1s",

    [theme.breakpoints.down("md")]: {
        top: "-2%",
        animationDelay: "0s",
    },

    "& img": {
        width: "100%",
        height: "100%",
        objectFit: "contain",
    },
    "&.second": {
        top: "70%",
        height: 95,
        animation: `${floating} 7s infinite`,
        animationTimingFunction: "ease-in-out",
        animationDirection: "alternate",
        animationDelay: "2.5s",

        [theme.breakpoints.down("md")]: {
            top: "64%",
            animationDelay: "1.5s",
        },
    }
}))

const Hero = () => {

    return (
        <Box sx={{ py: [5, 5, 10], bgcolor: 'secondary.dark' }} component="section">
            <Container maxWidth="lg">

                <Grid container spacing={5}>
                    <Grid item md={6}>
                        <TextBundle title="Udvikler med høje ambitioner" subtitle="Om mig" text="Min vision er at hjælpe små og mellemstore virksomheder med at få lavet en skræddersyet hjemmeside, som passer til deres online tilstedeværelse, på det vi alle kender som internettet. Ved at vælge mig er du sikret en skræddersyet hjemmeside kodet fra bunden." />
                        <Link href="/omkring" underline="hover">
                            Min historie
                        </Link>
                    </Grid>
                    <Grid item md={6}>
                        <AnimationContainer>
                            <AnimationBackground>
                                <img src={Browser} />
                            </AnimationBackground>
                            <AnimationElement>
                                <img src={HeroImage} />
                            </AnimationElement>
                            <AnimationElement className="second">
                                <img src={NewsletterImage} />
                            </AnimationElement>
                        </AnimationContainer>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    );
}

export default Hero
