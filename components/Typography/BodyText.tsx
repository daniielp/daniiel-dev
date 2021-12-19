import { Typography } from '@mui/material';


type bodyProps = {
    children: React.ReactNode;
    gutterBottom?: boolean;
}

const BodyText = (props : bodyProps) => {
    return (
        <Typography {...props} sx={{color: '#BDBDBD'}}>{props.children}</Typography>
    )
}

export default BodyText
