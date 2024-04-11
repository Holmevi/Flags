import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Country from "../../pages/Country";
import Navbar from "../Navbar/Navbar";

const Dashboard = ({ isDark, setIsDark }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Box
        sx={{
          backgroundColor: "var(--div-background-color)",
          color: "var(--text-color)",
          height: "100%",
          flex: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Routes>
          <Route path="/:id" element={<Country isDark={isDark} setIsDark={setIsDark} />} />
          <Route path="/" element={<Home isDark={isDark} setIsDark={setIsDark} />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default Dashboard;
