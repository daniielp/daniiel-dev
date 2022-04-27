import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "#f7d952",
      main: "#f5d027",
      dark: "#EEB200",
      contrastText: "#272c3a",
    },
    secondary: {
      light: "#5f6576",
      main: "#383f54",
      dark: "#272c3a",
      contrastText: "#bdbdbd",
    },
    text: {
      primary: "#fefefe",
      secondary: "#707070",
    },
    background: {
      default: "#383f54",
    },
  },
  typography: {
    fontFamily: ["Anonymous Pro", "monospace"].join(","),
    body1: {
      fontFamily: ["Roboto", "Helvetica", "sans-serif"].join(","),
    },
    body2: {
      fontFamily: ["Roboto", "Helvetica", "sans-serif"].join(","),
    },
  },
});

export default theme;
