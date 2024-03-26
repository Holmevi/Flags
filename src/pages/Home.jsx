import { Box } from "@mui/material";

const Home = () => {
    return <Box sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 5,
        background: '#202c36',
        color: 'white'

    }}>
        <h1>Home page</h1>
    </Box>
};

export default Home;