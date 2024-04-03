import { Box } from "@mui/material";
import InputFields from "../components/InputFields/InputFields";

const Home = () => {
    return <Box classname='Home' sx={{
        flex: 1,
        display: 'flex',
        justifycontent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 5,
        background: '--div-background-color',
        color: '--text-color',
        padding: '30px 20px'
    }}>
        <InputFields />
        <h1>Home page</h1>
    </Box>
};

export default Home;