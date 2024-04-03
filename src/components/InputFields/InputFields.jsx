import { Box, Select, TextField } from "@mui/material";
import "./InputFields.css";

const InputFields = () => {
  return (
    <Box className="InputFields">
      <TextField
        className="InputCountry"
        id="input-country"
        label="Search for a country"
        fontWeight="300"
        variant="outlined"
        sx={{
            // Root class for the input field
            "& .MuiOutlinedInput-root": {
              color: "#000",
              fontFamily: "Arial",
              fontWeight: "bold",
              // Class for the border around the input field
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#2e2e2e",
                borderWidth: "2px",
              },
            },
            // Class for the label of the input field
            "& .MuiInputLabel-outlined": {
              color: "#2e2e2e",
              fontWeight: "bold",
            },
          }}
      />
      <Select className="SelectRegion" id="select-region" fontWeight="300"
        variant="outlined" />
    </Box>
  );
};

export default InputFields;