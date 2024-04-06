import { Box } from "@mui/material";
import './Navbar.css'
import DarkModeButton from "../Dashboard/DarkModeButton/DarkModeButton";
import App from "../../App";

const Navbar = () => {
    return <Box className='Navbar'>
        <h1 className="TheFlagApp">The Flag App</h1>
        <img className="logo" src={"var(--logo)"} alt="" />
        <DarkModeButton />
    </Box>;
};

export default Navbar;