import { Box } from "@mui/material";

const Country = ({ isDark, setIsDark }) => {
    return <Box sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 5,
        background: '--div-background-color',
        color: '--text-color',
        padding: '30px 20px',
        maxWidth: '1280px'
    }}>
        <h1>Country page</h1>
    </Box>
};

export default Country;