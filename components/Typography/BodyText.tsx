import { Typography, Theme } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme: Theme) => ({
    bodyText: {
        color: "#BDBDBD"
    }
}));

type bodyProps = {
    children: React.ReactNode;
}

const BodyText = (props : bodyProps) => {
    const classes = useStyles()
    return (
        <Typography {...props} className={classes.bodyText}>{props.children}</Typography>
    )
}

export default BodyText
