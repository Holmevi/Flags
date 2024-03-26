import { Box } from "@mui/material";

const Country = () => {
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
        <h1>Country page</h1>
    </Box>
};

export default Country;