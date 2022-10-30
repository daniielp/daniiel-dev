import {
  Container,
  Grid,
  Tab,
  Tabs,
  Typography,
  Hidden,
  createSvgIcon,
} from "@mui/material";
import { Theme } from "@mui/material/styles";
import TextBundle from "../Typography/TextBundle";
import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import { Breadcrumbs } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import Image from "next/image";
import DenmarkVector from "../../assets/images/denmark-vector.svg";
import { keyframes } from "@emotion/react";
import ContactForm from "../ContactForm";
import Button from "../Button";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const imageElement = useRef(null);

  const handleChange = (
    _event: any,
    newIndex: React.SetStateAction<number>
  ) => {
    setIndex(newIndex);
  };

  const bounce = keyframes`
    from {
        opacity: 1;
        transform: scale3d(1,1,1);
    }

    to {
        opacity: 0;
        transform: scale3d(2,2,2);
    }
    `;

  return (
    <Box sx={{ py: [5, 5, 10], bgcolor: "secondary.dark" }} component="section">
      <Container maxWidth="lg">
        <TabContext value={index.toString()}>
          <TabPanel value={"0"} sx={{ p: 0 }}>
            <Grid container spacing={5}>
              <Grid item md={6}>
                <TextBundle
                  title="UI/UX Designer og Developer, baseret i Aarhus."
                  subtitle="Introduktion"
                  text="Med en kombination af uddannelsen som webudvikler, og med et skarpt øje for design og UI/UX, skaber vækst og gør mig i stand til at arbejde helhjertet med frontend-development. På den måde styrker jeg brandets position med at være de bedste når det kommer til frontend-development, og samtidig skaber værdifulde resultater, som i sidste ende giver bedre købeklare leads."
                  primaryHeading={true}
                />
                <Button href="/om-mig">Besøg siden</Button>
                {/* <Link href="/omkring">
                                    <Button variant="text" color="primary" endIcon={<ArrowForwardIosIcon />}>Min historie</Button>
                                </Link> */}
              </Grid>
              <Grid item md={6} sx={{ position: "relative", display: "flex" }}>
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                  <Box
                    sx={{
                      position: "absolute",
                      width: 10,
                      height: 10,
                      zIndex: 1,
                      opacity: 0,
                      background: "yellow",
                      top: "53.3%",
                      left: "32.2%",
                      borderRadius: "50%",
                      animation: `${bounce} 1.5s infinite`,
                    }}
                  ></Box>
                  <Image
                    src={DenmarkVector}
                    alt="vector map"
                    width="556"
                    height="600"
                    priority
                  />
                </Box>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={"1"} sx={{ p: 0 }}>
            <Grid container spacing={5}>
              <Grid item md={6}>
                <TextBundle
                  title="Hedder du rigtigt Daniiel med dobbelt i?"
                  subtitle="Historien bag"
                  text="Da navnet Daniiel blev lavet var det faktisk ikke meningen at det skulle være stavet med 2 i’er. Det var oprindeligt en stavefejl, men som tiden går begyndte jeg at vende mig mere og mere til det."
                />
              </Grid>
              <Grid item md={6}>
                <Typography variant="h1" component="h1">
                  Daniel{" "}
                  <Typography variant="h1" component="span" color="primary">
                    Pedersen
                  </Typography>{" "}
                </Typography>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={"2"} sx={{ p: 0 }}>
            <Grid container spacing={5}>
              <Grid item md={6}>
                <TextBundle
                  title="Du er altid velkommen til at kontakte mig"
                  subtitle="Kontakt"
                  text="Har du nogle spørgsmål eller føler du dig bare nysgerrig? Er du mere end velkommen til sende mig en mail. Så står jeg klar til de spørgsmål du end måtte have, eller bare tag en snak."
                />
              </Grid>
              <Grid item md={6}>
                <ContactForm />
              </Grid>
            </Grid>
          </TabPanel>
        </TabContext>
        <Box display="flex" sx={{ display: "flex", pt: 5 }}>
          <Hidden mdDown>
            <Breadcrumbs sx={{ color: "text.primary", typography: "h4" }}>
              <Typography
                variant="h4"
                component="p"
                sx={{ color: "primary.main" }}
              >
                {index + 1}
              </Typography>
              <Typography variant="h4" component="p">
                3
              </Typography>
            </Breadcrumbs>
          </Hidden>
          <Tabs
            value={index}
            onChange={handleChange}
            TabIndicatorProps={{
              style: { bottom: "unset", top: 0, height: 10 },
            }}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
          >
            <Tab
              label="Introduktion"
              sx={{
                borderTop: 10,
                borderColor: (theme: Theme) => theme.palette.grey[500],
                mx: 2,
              }}
            ></Tab>
            <Tab
              label="Historien bag"
              sx={{
                borderTop: 10,
                borderColor: (theme: Theme) => theme.palette.grey[500],
                mx: 2,
              }}
            ></Tab>
            <Tab
              label="Kontakt"
              sx={{
                borderTop: 10,
                borderColor: (theme: Theme) => theme.palette.grey[500],
                mx: 2,
              }}
            ></Tab>
          </Tabs>
        </Box>
      </Container>
    </Box>
  );
};

export default Slider;
