import { Box } from "@mui/material";

const Country = () => {
    return <Box classname="Country" sx={{
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
        <h1>Country page</h1>
    </Box>
};

export default Country;