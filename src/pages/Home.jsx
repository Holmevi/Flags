import { Box, Button } from "@mui/material";

const Home = () => {
    return <Box sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 5
    }}>
        <h1>Home page</h1>
    </Box>
};

export default Home;