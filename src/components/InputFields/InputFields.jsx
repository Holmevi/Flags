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
          color: "white",
          "& .MuiOutlinedInput-root": {
            color: "white",
            fontWeight: "400",
            "&:hover": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
            },
            // Class for the border around the input field
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#2b3844",
              borderWidth: "1px",
            },
          },
          // Class for the label of the input field
          "& .MuiInputLabel-outlined": {
            color: "white",
            fontWeight: "400",
          },
        }}
      />
      <Select className="SelectRegion" id="select-region" fontWeight="300"
        variant="outlined" />
    </Box>
  );
};

export default InputFields;