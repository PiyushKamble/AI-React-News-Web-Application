import { createRoot } from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import App from "./App";
const theme = createTheme();
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <ThemeProvider theme={theme}>
    <App tab="home" />
  </ThemeProvider>
);
