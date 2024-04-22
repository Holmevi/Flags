import { Box } from "@mui/material";
import InputFields from "../components/InputFields/InputFields";
import CountryCard from "../components/CountryCard/CountryCard";
import { useNavigate } from "react-router-dom";
import React from "react";

const Home = ({ isDark, setIsDark, filteredData, isLoading }) => {
  const [filterText, setFilterText] = React.useState("");
  const [filterRegion, setFilterRegion] = React.useState("all");
  const navigate = useNavigate();

  // Filtered countries based on the input text
  const filteredCountries = filteredData.filter((country) =>
    country.country.toLowerCase().includes(filterText.toLowerCase())
  );

  // Filtered countries based on the selected region
  const filteredCountriesByRegion =
    filterRegion === "all"
      ? filteredCountries
      : filteredCountries.filter(
          (country) => country.region.toLowerCase() === filterRegion
        );

  const handleCountryClick = (countryName) => {
    navigate(`/${countryName}`);
  };

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        gap: 4,
        background: "--div-background-color",
        color: "--text-color",
        padding: "30px 20px",
        maxWidth: "1280px",
      }}
    >
      <InputFields
        isDark={isDark}
        setIsDark={setIsDark}
        filterText={filterText}
        setFilterText={setFilterText}
        filterRegion={filterRegion}
        setFilterRegion={setFilterRegion}
      />
      <Box
        sx={{
          flex: 1,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          flexWrap: "wrap",
          background: "--div-background-color",
          color: "--text-color",
          padding: "0px 0px",
          gap: "0px",
        }}
      >
        {filteredCountriesByRegion.length === 0 && filterText && !isLoading ? (
          <p>Could not find countries in that region!</p>
        ) : (
          filteredCountriesByRegion.map((country) => (
            <CountryCard
              key={country.country}
              flag={country.flag}
              country={country.country}
              population={country.population}
              region={country.region}
              capital={country.capital}
              onClick={() => handleCountryClick(country.country)}
              isLoading={isLoading}
            />
          ))
        )}
      </Box>
    </Box>
  );
};

export default Home;
