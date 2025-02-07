/** LIBRARIES */
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  breakpoints: {
    values: {
      xxxs: 0,
      xxs: 330,
      xs: 440,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: "none",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: "none",
        },
      },
    },
  },
  palette: {
    primary: {
      contrastText: "#fff",
      dark: "#2c8638",
      light: "#65cc73",
      main: "#3fc051",
    },
    secondary: {
      contrastText: "#000",
      dark: "#862c79",
      light: "#cc65be",
      main: "#C03FAE",
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
});
