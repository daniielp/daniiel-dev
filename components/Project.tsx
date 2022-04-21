import { Box, Button, Card, CardActions, CardContent, Container, Grid, Typography } from '@mui/material';
import TextBundle from './Typography/TextBundle';
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
                            <CardContent>
                                <Typography gutterBottom variant="subtitle1" component="p">- shorcy.com</Typography>
                                <Typography gutterBottom variant="h5" component="h5">Web development</Typography>
                                <Typography variant="body2" color="text.secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ut aliquam purus sit amet luctus venenatis lectus. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Ornare massa eget egestas purus. Ut ornare lectus sit amet. Sodales ut eu sem integer. Sed id semper risus in hendrerit gravida rutrum quisque. Donec pretium vulputate sapien nec. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Viverra nibh cras pulvinar mattis nunc.</Typography>
                            </CardContent>
                            <CardActions>
                                <Button href="https://shorcy.com" target="_blank" variant="text" component="a">Besøg siden</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item md={4}>
                        <Card sx={{ backgroundColor: "#272c3a", backgroundImage: 'none', height: "100%" }}>
                            <CardContent>
                                <Typography gutterBottom variant="subtitle1" component="p">- novicell.dk</Typography>
                                <Typography gutterBottom variant="h5" component="h5">Designforslag</Typography>
                                <Typography variant="body2" color="text.secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ut aliquam purus sit amet luctus venenatis lectus. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Ornare massa eget egestas purus. Ut ornare lectus sit amet. Sodales ut eu sem integer. Sed id semper risus in hendrerit gravida rutrum quisque. Donec pretium vulputate sapien nec. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Viverra nibh cras pulvinar mattis nunc.</Typography>
                            </CardContent>
                            {/* <CardActions sx={{color: "text.secondary"}}>
                            </CardActions> */}
                        </Card>
                    </Grid>
                    <Grid item md={4}>
                        <Card sx={{ backgroundColor: "#272c3a", backgroundImage: 'none', height: "100%" }}>
                            <CardContent>
                                <Typography gutterBottom variant="subtitle1" component="p">- daniiel.dk</Typography>
                                <Typography gutterBottom variant="h5" component="h5">Web development</Typography>
                                <Typography variant="body2" color="text.secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ut aliquam purus sit amet luctus venenatis lectus. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Ornare massa eget egestas purus. Ut ornare lectus sit amet. Sodales ut eu sem integer. Sed id semper risus in hendrerit gravida rutrum quisque. Donec pretium vulputate sapien nec. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Viverra nibh cras pulvinar mattis nunc.</Typography>
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
