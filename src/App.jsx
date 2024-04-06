import "./App.css";
import { Box, Button } from "@mui/material";
import Dashboard from "./components/Dashboard/Dashboard";
import { useState } from "react";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import Brightness4Icon from "@mui/icons-material/Brightness4";

export function App() {
  const [isDark, setIsDark] = useState(true);

  const clickDarkMode = () => {
    console.log("test");
  };

  return (
    <Box className="App" data-theme={isDark ? "dark" : "light"}>

      {isDark ? (

        <Button
        variant="contained"
        disableElevation
        className="DarkLightButton"
        onClick={() => setIsDark(!isDark)}
        sx={{
          bgcolor: "var(--nav-background-color)",
          "&:hover": {
            bgcolor: "var(--button-hover-color)",
          },
          px: "8px",
          py: "6px",
        }}
      ><BrightnessHighIcon className="DarkLightButtonIcon" />
      <p className="DarkLightButtonLabel">DARK MODE</p></Button>

      ) : (

        <Button
        variant="contained"
        disableElevation
        className="DarkLightButton"
        onClick={() => setIsDark(!isDark)}
        sx={{
          bgcolor: "white",
          "&:hover": {
            bgcolor: "var(--button-hover-color)",
          },
          px: "8px",
          py: "6px",
        }}
      >
        <Brightness4Icon className="DarkLightButtonIcon" />
        <p className="DarkLightButtonLabel">LIGHT MODE</p>
      </Button>

      )}
      <Dashboard />
    </Box>
  );
}

export default App;
