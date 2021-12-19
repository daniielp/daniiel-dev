import {Box, Container, Grid} from '@mui/material';
import TextBundle from './Typography/TextBundle';
import PropTypes from 'prop-types'

const Project = () => {
    return (
        <Box sx={{py: [5, 5, 10]}} component="section">
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item md={6}>
                        <TextBundle title="Alt det creative, samt udvalgte cases" subtitle="Projekter" text="For at sikre dig at du tager den rigtige beslutning når du skal vælge den næste medarbejder. Så er der her lige nogle eksempler på tidligere projekter og cases jeg har arbejdet med." />
                    </Grid>
                    <Grid item md={6}>

                    </Grid>
                </Grid>
                <Grid container>
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
