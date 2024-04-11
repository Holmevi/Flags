import "./CountryCard.css";
import { Box } from "@mui/material";

const CountryCard = () => {
  return (
    <Box className="CountryCard">
      <img className="Flag" src="src\assets\se.png" alt="" />
      <Box className="InfoField">
        <p className="CountryName">Sverige</p>
        <Box className="InfoPair">
          <p className="InfoLabel">Population:</p>
          <p className="Info">8000000</p>
        </Box>
        <Box className="InfoPair">
          <p className="InfoLabel">Region:</p>
          <p className="Info">Europe</p>
        </Box>
        <Box className="InfoPair">
          <p className="InfoLabel">Capital</p>
          <p className="Info">Stockholm</p>
        </Box>
      </Box>
    </Box>
  );
};

export default CountryCard;
