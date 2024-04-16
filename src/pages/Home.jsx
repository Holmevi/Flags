import { Box } from "@mui/material";
import InputFields from "../components/InputFields/InputFields";
import CountryCard from "../components/CountryCard/CountryCard";
import { useNavigate } from "react-router-dom"; // <-- Import useNavigate
import React from "react";

const Home = ({ isDark, setIsDark, filteredData }) => {
  const [filterText, setFilterText] = React.useState("");
  const navigate = useNavigate(); // <-- Initialize useNavigate here

  // Filtered countries based on the input text
  const filteredCountries = filteredData.filter((country) =>
    country.country.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleCountryClick = (countryName) => {
    navigate(`/${countryName}`); // <-- Navigate to CountryPage with countryName
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
        setFilterText={setFilterText} // Pass the state and setState function
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
        {filteredCountries.length === 0 ? (
          <p>Could not find that country!</p>
        ) : (
          filteredCountries.map((country) => (
            <CountryCard
              key={country.country}
              flag={country.flag}
              country={country.country}
              population={country.population}
              region={country.region}
              capital={country.capital}
              onClick={() => handleCountryClick(country.country)} // <-- Pass handleCountryClick to CountryCard
            />
          ))
        )}
      </Box>
    </Box>
  );
};

export default Home;
