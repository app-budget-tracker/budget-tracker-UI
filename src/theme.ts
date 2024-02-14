import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2E5E79",
    },
    secondary: {
      main: "#2E5E79",
    },
    error: {
      main: "#D72626",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          fontWeight: 'bold',
        },
      },
    },
  },
});

export default theme;
