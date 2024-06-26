import "./App.css";
import { Box } from "@mui/material";
import Dashboard from "./components/Dashboard/Dashboard";
import { useState, useEffect } from "react";

async function getCountryData() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();

    const formattedData = data
      .map((country) => {
        return {
          country: country.name?.common || "",
          population: country.population || 0,
          region: country.region || "",
          capital: country.capital ? country.capital[0] : "",
          flag: country.flags ? country.flags.png : "",
          cca3: country.cca3 || "",
          nativeName: country.name?.nativeName?.common || "",
          topLevelDomain: country.tld ? country.tld.join(", ") : "",
          currencies: country.currencies
            ? Object.values(country.currencies)
                .map((currency) => currency.name)
                .join(", ")
            : "",
          language: country.languages
            ? Object.values(country.languages).join(", ")
            : "",
          borders: country.borders || [],
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
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();

        const formattedData = data
          .map((country) => {
            return {
              country: country.name?.common || "",
              population: country.population || 0,
              region: country.region || "",
              capital: country.capital ? country.capital[0] : "",
              flag: country.flags ? country.flags.png : "",
              cca3: country.cca3 || "",
              nativeName: country.name?.nativeName?.common || "",
              topLevelDomain: country.tld ? country.tld.join(", ") : "",
              currencies: country.currencies
                ? Object.values(country.currencies)
                    .map((currency) => currency.name)
                    .join(", ")
                : "",
              language: country.languages
                ? Object.values(country.languages).join(", ")
                : "",
              borders: country.borders || [],
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

        setFilteredData(formattedData);
        setIsLoading(false); // Set isLoading to false after data is fetched
      } catch (e) {
        console.log(e);
        setIsLoading(false); // Set isLoading to false if there's an error
      }
    }

    fetchData();
  }, []);

  return (
    <Box className="App" data-theme={isDark ? "dark" : "light"}>
      <Dashboard
        isDark={isDark}
        setIsDark={setIsDark}
        filteredData={filteredData}
        isLoading={isLoading} // Pass isLoading to Dashboard
      />
    </Box>
  );
}

export default App;
