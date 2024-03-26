import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Country from "../../pages/Country";
import Navbar from "../Navbar/Navbar";

const Dashboard = ({}) => {
	return (
		<Box sx={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
			<Box sx={{ height: '100%', flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
                <Navbar />
				<Routes> 
					<Route path="/:id" element={<Country />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</Box>
		</Box>
	);
};

export default Dashboard;