import "./CountryPage.css";
import { Box } from "@mui/material";

const CountryPage = ({
  flag,
  country,
  population,
  region,
  capital,
  nativeName,
  topLevelDomain,
  currencies,
  language,
  borders,
}) => {
  return (
    <Box className="CountryPage">
      <button onClick={() => window.history.back()}>BACK</button>
      <img className="Flag" src={flag} alt={`${country} flag`} />
      <Box className="InfoField">
        <p className="CountryName">{country}</p>
        <Box className="InfoPair">
          <p className="InfoLabel">Population:</p>
          <p className="Info">{population}</p>
        </Box>
        <Box className="InfoPair">
          <p className="InfoLabel">Region:</p>
          <p className="Info">{region}</p>
        </Box>
        <Box className="InfoPair">
          <p className="InfoLabel">Capital:</p>
          <p className="Info">{capital}</p>
        </Box>
        <Box className="InfoPair">
          <p className="InfoLabel">Native Name:</p>
          <p className="Info">{nativeName}</p>
        </Box>
        <Box className="InfoPair">
          <p className="InfoLabel">Top Level Domain:</p>
          <p className="Info">{topLevelDomain}</p>
        </Box>
        <Box className="InfoPair">
          <p className="InfoLabel">Currencies:</p>
          <p className="Info">{currencies}</p>
        </Box>
        <Box className="InfoPair">
          <p className="InfoLabel">Language:</p>
          <p className="Info">{language}</p>
        </Box>
        <Box className="InfoPair">
          <p className="InfoLabel">Borders:</p>
          <p className="Info">
            {borders.length > 0 ? borders.join(", ") : "N/A"}
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export default CountryPage;
