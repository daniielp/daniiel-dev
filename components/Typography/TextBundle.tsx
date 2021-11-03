import { Typography } from '@material-ui/core'
import BodyText from './BodyText'

interface textBunde {
    title: string,
    subtitle: string,
    text: string,
}

const TextBundle = ({title, subtitle, text}: textBunde) => {
    return (
        <>
            <Typography variant="h3" component="h3" color="textSecondary" gutterBottom>- {subtitle}</Typography>
            <Typography variant="h2" component="h2" gutterBottom>{title}</Typography>
            <BodyText>{text}</BodyText>
        </>
    )
}

export default TextBundle