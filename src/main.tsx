/** LIBRARIES */
import { ThemeProvider } from "@mui/material/styles";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

/** OTHER */
import store from "@src/store";
import Routes from "@src/routes/Routes";

/** STYLES */
import "@src/index.scss";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "@src/theme/theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
