import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Country from "../../pages/Country";

const Dashboard = ({}) => {
	return (
		<Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
			<Box sx={{ flex: 1, overflowY: 'auto', display: 'flex   ' }}>
				<Routes> 
					<Route path="/:id" element={<Country />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</Box>
		</Box>
	);
};

export default Dashboard;