import { Button } from "@mui/material";
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import Brightness4Icon from '@mui/icons-material/Brightness4';

const DarkModeButton = ( props ) => {

    console.log(props)
var darkMode = true;

function goDark() {
    darkMode = true;
    console.log(darkMode);
}

function goLight() {
    darkMode = false;
    console.log(darkMode);
}

if (darkMode === true) {
    return <Button variant="contained" disableElevation className="DarkLightButton" onClick={() => clickDarkMode(true)} 
      sx={{
        bgcolor: 'var(--nav-background-color)',
        "&:hover": {
            bgcolor: 'var(--button-hover-color)',
          },
        px: '8px',
        py: '6px',
    }}>
        <BrightnessHighIcon  className="DarkLightButtonIcon" />
        <p className="DarkLightButtonLabel">DARK MODE</p>
    </Button>
} else {
    return <Button variant="contained" disableElevation className="DarkLightButton" onClick={goLight()} sx={{
        bgcolor: 'white',
        "&:hover": {
            bgcolor: 'var(--button-hover-color)',
          },
        px: '8px',
        py: '6px',
    }}>
        <Brightness4Icon className="DarkLightButtonIcon" />
        <p className="DarkLightButtonLabel">LIGHT MODE</p>
    </Button>
}

};

export default DarkModeButton;