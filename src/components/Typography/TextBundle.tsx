import { Typography } from '@mui/material'
import BodyText from './BodyText'

interface textBunde {
    title: string,
    subtitle: string,
    text: string,
    primaryHeading?: boolean
}

const TextBundle = ({title, subtitle, text, primaryHeading = false}: textBunde) => {
    return (
        <>
            <Typography variant="h3" component="h3" color="textSecondary" gutterBottom>- {subtitle}</Typography>
            <Typography variant="h2" component={primaryHeading ? "h1" : "h2"} gutterBottom>{title}</Typography>
            <BodyText>{text}</BodyText>
        </>
    )
}

export default TextBundle