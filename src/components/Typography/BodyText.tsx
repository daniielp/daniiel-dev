import { Typography } from '@mui/material';


type bodyProps = {
    children: React.ReactNode;
    gutterBottom?: boolean;
    itemProp?: string;
    itemScope?: boolean;
    itemType?: string;
}

const BodyText = (props : bodyProps) => {
    return (
        <Typography {...props} sx={{color: '#BDBDBD'}} gutterBottom>{props.children}</Typography>
    )
}

export default BodyText
