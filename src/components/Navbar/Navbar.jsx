import { Box } from "@mui/material";
import './Navbar.css'
import DarkModeButton from "../DarkModeButton/DarkModeButton";


const Navbar = ({ isDark, setIsDark }) => {
    return <Box className='Navbar'>
        <h1 className="TheFlagApp">The Flag App</h1>
        <img src="src\assets\techover-logo.png" alt="" />
        <DarkModeButton isDark={isDark} setIsDark={setIsDark} />
    </Box>
};

export default Navbar;