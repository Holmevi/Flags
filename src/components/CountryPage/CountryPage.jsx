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
      <Box className="FlagFieldCP">
        <img className="FlagCP" src={flag} alt={`${country} flag`} />
      </Box>

      <Box className="InfoFieldCP">
        <p className="CountryNameCP">{country}</p>
        <Box className="InfoColumnPairCP">
          <Box className="InfoColumnCP">
            <Box className="InfoPairCP">
              <p className="InfoLabelCP">Population:</p>
              <p className="InfoCP">{population}</p>
            </Box>
            <Box className="InfoPairCP">
              <p className="InfoLabelCP">Region:</p>
              <p className="InfoCP">{region}</p>
            </Box>
            <Box className="InfoPairCP">
              <p className="InfoLabelCP">Capital:</p>
              <p className="InfoCP">{capital}</p>
            </Box>
            {/*
            <Box className="InfoPairCP">
              <p className="InfoLabelCP">Native Name:</p>
              <p className="InfoCP">{nativeName}</p>
            </Box>
            */}

            <Box className="InfoPairCP">
              <p className="InfoLabelCP">Top Level Domain:</p>
              <p className="InfoCP">{topLevelDomain}</p>
            </Box>
            <Box className="InfoPairCP">
              <p className="InfoLabelCP">Currencies:</p>
              <p className="InfoCP">{currencies}</p>
            </Box>
            <Box className="InfoPairCP">
              <p className="InfoLabelCP">Language:</p>
              <p className="InfoCP">{language}</p>
            </Box>
            <Box className="InfoPairCP">
              <p className="InfoLabelCP">Borders:</p>
              <p className="InfoCP">
                {borders.length > 0 ? borders.join(", ") : "N/A"}
              </p>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CountryPage;
