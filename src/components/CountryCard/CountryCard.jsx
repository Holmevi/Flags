import "./CountryCard.css";
import { Box, Skeleton } from "@mui/material";

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
    /* Skeleton design that i want for my loading state, i want to render 9 skeleton cards until loading state is fullfilled. 
    <Box className="CountryCard" onClick={onClick}>
      <Skeleton
						variant="square"
						sx={{ width: '100%', height: '200px' }}
					/>
      <Box className="InfoField">
      <Skeleton variant="text" sx={{ fontSize: 20, width:150, marginBottom: 1 }} />
        <Box className="InfoPair">
          <p className="InfoLabel">Population:</p>
          <Skeleton variant="text" sx={{ fontSize: 14, width:100 }} />
        </Box>
        <Box className="InfoPair">
          <p className="InfoLabel">Region:</p>
          <Skeleton variant="text" sx={{ fontSize: 14, width:100 }} />
        </Box>
        <Box className="InfoPair">
          <p className="InfoLabel">Capital:</p>
          <Skeleton variant="text" sx={{ fontSize: 14, width:100 }} />
        </Box>
      </Box>
    </Box>
*/
  );
};

export default CountryCard;
