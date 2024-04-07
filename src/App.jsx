import "./App.css";
import { Box } from "@mui/material";
import Dashboard from "./components/Dashboard/Dashboard";
import { useState } from "react";

export function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <Box className="App" data-theme={isDark ? "dark" : "light"}>
      <Dashboard isDark={isDark} setIsDark={setIsDark} />
    </Box>
  );
}

export default App;
