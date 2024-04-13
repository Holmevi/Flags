import "./App.css";
import { Box } from "@mui/material";
import Dashboard from "./components/Dashboard/Dashboard";
import { useState, useEffect } from "react";

async function getCountryData() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();

    // Filter and format the data
    const formattedData = data
      .map((country) => {
        return {
          country: country.name.common,
          population: country.population || 0,
          region: country.region,
          capital: country.capital ? country.capital[0] : "",
          flag: country.flags ? country.flags.png : "",
        };
      })
      .filter(
        (country) =>
          country.country &&
          country.population &&
          country.region &&
          country.capital &&
          country.flag
      )
      .sort((a, b) => a.country.localeCompare(b.country));

    return formattedData;
  } catch (e) {
    console.log(e);
    return [];
  }
}

export function App() {
  const [isDark, setIsDark] = useState(true);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getCountryData();
      setFilteredData(data);
    }

    fetchData();
  }, []);

  return (
    <Box className="App" data-theme={isDark ? "dark" : "light"}>
      <Dashboard isDark={isDark} setIsDark={setIsDark} filteredData={filteredData} />
    </Box>
  );
}

export default App;