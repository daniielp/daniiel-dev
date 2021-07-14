import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    bodyText: {
        color: theme.palette.text.hint
    }
}));

const BodyText = (props) => {
    const classes = useStyles()
    return (
        <Typography {...props} className={classes.bodyText}>{props.children}</Typography>
    )
}

export default BodyText
