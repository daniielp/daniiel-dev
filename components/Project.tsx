import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import TextBundle from './Typography/TextBundle';
import shorcyPortfolio from '../assets/images/portfolio-shorcy.jpg'
import novicellPortfolio from '../assets/images/portfolio-novicell.jpg'
import daniielPortfolio from '../assets/images/portfolio-daniiel.jpg'
import PropTypes from 'prop-types'

const Project = () => {
    return (
        <Box sx={{ py: [5, 5, 10] }} component="section">
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item md={6}>
                        <TextBundle title="Alt det creative, samt udvalgte cases" subtitle="Projekter" text="For at sikre dig at du tager den rigtige beslutning når du skal vælge den næste medarbejder. Så er der her lige nogle eksempler på tidligere projekter og cases jeg har arbejdet med." />
                    </Grid>
                    <Grid item md={6}>

                    </Grid>
                </Grid>
                <Grid container sx={{ mt: 0 }} spacing={5}>
                    <Grid item md={4}>
                        <Card sx={{ backgroundColor: "#272c3a", backgroundImage: 'none', height: "100%" }}>
                            <CardMedia component="img" height="200" alt="Shorcy.com web development in WordPress" image={shorcyPortfolio} />
                            <CardContent>
                                <Typography gutterBottom variant="subtitle1" color="text.secondary" component="p">- shorcy.com</Typography>
                                <Typography gutterBottom variant="h5" component="h5">Web development</Typography>
                                <Typography variant="body1">Det nye website har givet shorcy's visuelle identitet et moderne look. Sitet er målrettet B2B og har til formål at øge tillid, samt leads.</Typography>
                            </CardContent>
                            <CardActions>
                                <Button href="https://shorcy.com" target="_blank" variant="text" component="a">Besøg siden</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item md={4}>
                        <Card sx={{ backgroundColor: "#272c3a", backgroundImage: 'none', height: "100%" }}>
                            <CardMedia component="img" height="200" alt="Designforslag til novicell" image={novicellPortfolio} />
                            <CardContent>
                                <Typography gutterBottom variant="subtitle1" color="text.secondary" component="p">- novicell.dk</Typography>
                                <Typography gutterBottom variant="h5" component="h5">Designforslag</Typography>
                                <Typography variant="body1">Opgaven bestod i at skabe en bedre visuel identitet der afspejler deres brand. Jeg designede en moderne, minimalistisk hjemmeside med fokus på innovation.</Typography>
                            </CardContent>
                            {/* <CardActions sx={{color: "text.secondary"}}>
                            </CardActions> */}
                        </Card>
                    </Grid>
                    <Grid item md={4}>
                        <Card sx={{ backgroundColor: "#272c3a", backgroundImage: 'none', height: "100%" }}>
                            <CardMedia component="img" height="200" alt="daniiel.dev web development in NextJS" src="img" image={daniielPortfolio} />
                            <CardContent>
                                <Typography gutterBottom variant="subtitle1" color="text.secondary" component="p">- daniiel.dev</Typography>
                                <Typography gutterBottom variant="h5" component="h5">Web design/development</Typography>
                                <Typography variant="body1" color="text.primary">Skrædersyet hjemmeside kodet fra bunden med fokus på brugervenlighed og online tilstedeværelse.</Typography>
                            </CardContent>
                            {/* <CardActions sx={{color: "text.secondary"}}>
                            </CardActions> */}
                        </Card>
                    </Grid>
                    {/* <ProjectCard /> */}
                </Grid>
            </Container>
        </Box>
    )
}

Project.propTypes = {
    isFrontpage: PropTypes.bool,
}

export default Project
