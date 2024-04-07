import React from "react";
import { Button } from "@mui/material";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import Brightness4Icon from "@mui/icons-material/Brightness4";

const DarkModeButton = ({ isDark, setIsDark }) => {
  return (
    <Button
      variant="contained"
      disableElevation
      className="DarkLightButton"
      onClick={() => setIsDark(!isDark)}
      sx={{
        bgcolor: isDark ? "var(--nav-background-color)" : "white",
        "&:hover": {
          bgcolor: "var(--button-hover-color)",
        },
        px: "8px",
        py: "6px",
      }}
    >
      {isDark ? (
        <BrightnessHighIcon className="DarkLightButtonIcon" />
      ) : (
        <Brightness4Icon className="DarkLightButtonIcon" />
      )}
      <p className="DarkLightButtonLabel">{isDark ? "DARK MODE" : "LIGHT MODE"}</p>
    </Button>
  );
};

export default DarkModeButton;