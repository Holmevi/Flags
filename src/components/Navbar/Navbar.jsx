import { Box, Button } from "@mui/material";
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import './Navbar.css'

const Navbar = () => {
    return <Box className='Navbar'>
        <h1 className="TheFlagApp">The Flag App</h1>
        <img src="src\assets\techover-logo.png" alt="" />
        <Button variant="contained" disableElevation className="DarkLightButton" sx={{
            bgcolor: '#2b3844',
            "&:hover": {
                bgcolor: '#2b3844',
                filter: 'brightness(1.2)'
              },
            px: '8px',
            py: '6px',
        }}>
            <BrightnessHighIcon  className="DarkLightButtonIcon" />
            <p className="DarkLightButtonLabel">DARK MODE</p>
        </Button>
    </Box>;
};

export default Navbar;