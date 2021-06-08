import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            light: "#f7d952",
            main: '#f5d027',
            dark: "#EEB200",
        },
        secondary: {
            light: "#5f6576",
            main: '#383f54',
            dark: "#272c3a"
        },
        text: {
            primary: "#fefefe",
            secondary: "#707070",
            hint: "#BDBDBD",
        },
        background: {
            default: "#383f54",
        },
    },
    typography: {
        fontFamily: [
            'Anonymous Pro',
            'monospace'
        ]
    }
})

export default responsiveFontSizes(theme)