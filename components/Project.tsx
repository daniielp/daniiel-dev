import {Container, Grid, makeStyles} from '@material-ui/core'
import TextBundle from './Typography/TextBundle';
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
    grow: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),

        [theme.breakpoints.down('sm')]: {
            paddingTop: theme.spacing(5),
            paddingBottom: theme.spacing(5),
        }
    },
}))

interface project {
    isFrontpage: boolean
}

const Project = ({isFrontpage}: project) => {
    const classes = useStyles();
    return (
        <section className={classes.grow}>
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
        </section>
    )
}

Project.propTypes = {
    isFrontpage: PropTypes.bool,
}

export default Project
