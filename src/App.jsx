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
          country: country.name?.common || "",
          population: country.population || 0,
          region: country.region || "",
          capital: country.capital ? country.capital[0] : "",
          flag: country.flags ? country.flags.png : "",
          cca3: country.cca3 || "",
          nativeName: country.name?.nativeName?.swe?.common || "",
          topLevelDomain: country.tld ? country.tld[0] : "",
          currencies: country.currencies ? country.currencies.SEK?.name : "",
          language: country.languages ? country.languages.swe : "",
          borders: country.borders || []
        };
      })
      // No strict filtering conditions, keep all countries
      .sort((a, b) => a.country.localeCompare(b.country));

    console.log(formattedData.slice(0, 5)); // Print first 5 countries as a sample
    console.log("Number of countries:", formattedData.length); // Print number of countries

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
      {console.log(filteredData)}
    </Box>
  );
}

export default App;