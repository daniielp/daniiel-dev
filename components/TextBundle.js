import { Typography } from '@material-ui/core'
import BodyText from './BodyText'
import PropTypes from 'prop-types'

const TextBundle = ({title, subtitle, text}) => {
    return (
        <>
            <Typography variant="h3" component="h3" color="textSecondary" gutterBottom>- {subtitle}</Typography>
            <Typography variant="h2" component="h2" gutterBottom>{title}</Typography>
            <BodyText>{text}</BodyText>
        </>
    )
}

TextBundle.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default TextBundle