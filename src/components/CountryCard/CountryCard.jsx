import "./CountryCard.css";
import { Box } from "@mui/material";

const CountryCard = ({
  flag,
  country,
  population,
  region,
  capital,
  onClick,
}) => {
  return (
    <Box className="CountryCard" onClick={onClick}>
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
      </Box>
    </Box>
  );
};

export default CountryCard;
