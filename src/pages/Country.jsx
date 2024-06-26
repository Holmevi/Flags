import "../App.css";
import { Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import CountryPage from "../components/CountryPage/CountryPage";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Country = ({ isDark, setIsDark, filteredData }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Find the country that matches the route parameter ID
  const countryData =
    filteredData.find((country) => country.country === id) || {};

  if (!countryData.country) {
    // If country not found, navigate back to home
    navigate("/");
    return null;
  }

  // Convert borders to full country names
  const convertBordersToNames = (borders, data) => {
    return borders.map((cca3) => {
      const country = data.find((country) => country.cca3 === cca3);
      return country ? country.country : cca3; // Return country name or cca3 code if not found
    });
  };

  const borders = convertBordersToNames(countryData.borders, filteredData);

  return (
    <Box className="countryBox"
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        background: "--div-background-color",
        color: "--text-color",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <button className="backButton" onClick={() => navigate("/")}>
          <ArrowBackIosIcon className="ArrowBackIosIcon" /> BACK
        </button>
      </Box>
      <CountryPage
        flag={countryData.flag}
        country={countryData.country}
        population={countryData.population}
        region={countryData.region}
        capital={countryData.capital}
        nativeName={countryData.nativeName}
        topLevelDomain={countryData.topLevelDomain}
        currencies={countryData.currencies}
        language={countryData.language}
        borders={borders}
      />
    </Box>
  );
};

export default Country;
