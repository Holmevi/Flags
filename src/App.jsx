import "./App.css";
import { Box } from "@mui/material";
import Dashboard from "./components/Dashboard/Dashboard";
import { useState, useEffect } from "react";

async function getCountryData() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();

    // Filter and format the data
    const filteredData = data.map((country) => {
      return {
        "country": country.name.common,
        "population": country.population || 0,
        "region": country.region,
        "capital": country.capital ? country.capital[0] : "",
        "flag": country.flags ? country.flags.png : ""
      };
    })
    .filter(country => country.country && country.population && country.region && country.capital && country.flag)
    .sort((a, b) => a.country.localeCompare(b.country));

    console.log(filteredData);

    // Store filteredData in state or do something else with it
    // setFilteredData(filteredData); // Assuming you'd use this in your component's state
  } catch (e) {
    console.log(e);
  }
}

export function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Call the getCountryData function when the component mounts
    getCountryData();
  }, []);

  return (
    <Box className="App" data-theme={isDark ? "dark" : "light"}>
      <Dashboard isDark={isDark} setIsDark={setIsDark} />
    </Box>
  );
}

export default App;
