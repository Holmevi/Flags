import "./InputFields.css";
import { Box, Select, MenuItem, TextField } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState, useEffect } from "react";

const CustomTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#bdbdbd", // Gray border color
    },
    "&:hover fieldset": {
      borderColor: "#fff", // Border color on hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "#fff", // Border color when focused
    },
  },
  "& .MuiInputLabel-root": {
    color: "#bdbdbd", // Label color
    "&.Mui-focused": {
      color: "#fff", // Label color when focused
    },
  },
  "& .MuiInputBase-input": {
    color: "#bdbdbd", // Text color
    "&:focus": {
      color: "#fff", // Text color when focused
    },
  },
}));

const CustomSelect = ({ isDark, setIsDark, ...props }) => {
  const [arrowColor, setArrowColor] = useState(isDark ? "#fff" : "#000");
  console.log(isDark);
  // Update arrow color when isDark state changes
  useEffect(() => {
    setArrowColor(isDark ? "#fff" : "#000");
  }, [isDark]);

  return (
    <Select
      {...props}
      sx={{
        "& .MuiInputLabel-root": {
          color: "#bdbdbd", // Label color
          "&.Mui-focused": {
            color: "#fff", // Label color when focused
          },
        },
        "& .MuiOutlinedInput-root": {
          borderColor: "#bdbdbd", // Gray border color
          "&:hover fieldset": {
            borderColor: "#fff", // Border color on hover
          },
          "&.Mui-focused fieldset": {
            borderColor: "#fff", // Border color when focused
          },
        },
        "& .MuiSelect-icon": {
          color: arrowColor, // Arrow color based on isDark state
        },
        "& .MuiSelect-select": {
          color: "#bdbdbd", // Text color
          "&:focus": {
            color: "#fff", // Text color when focused
          },
        },
        "& .MuiListItem-root": {
          color: "#bdbdbd", // Text color of menu items
          "&:hover": {
            backgroundColor: "#000", // Background color of menu items on hover
          },
        },
      }}
    >
      {props.children}
    </Select>
  );
};

const InputFields = ({ isDark, setIsDark }) => {
  return (
    <Box className="InputFields">
      <CustomTextField
        className="InputCountry"
        id="input-country"
        label="Search for a country"
        fontWeight="300"
        variant="outlined"
        isDark={isDark} // Pass isDark as a prop
        setIsDark={setIsDark} // Pass setIsDark as a prop
        sx={{
          "& .MuiOutlinedInput-root": {
            borderColor: "#bdbdbd", // Gray border color
          },
        }}
      />
      <CustomSelect
        className="SelectRegion"
        id="select-region"
        label="Region"
        fontWeight="300"
        variant="outlined"
        isDark={isDark} // Pass isDark as a prop
        setIsDark={setIsDark} // Pass setIsDark as a prop
        sx={{
          "& .MuiInputLabel-root": {
            color: "#bdbdbd", // Label color
            "&.Mui-focused": {
              color: "#fff", // Label color when focused
            },
          },
          "& .MuiOutlinedInput-root": {
            borderColor: "#bdbdbd", // Gray border color
          },
        }}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="africa">Africa</MenuItem>
        <MenuItem value="america">America</MenuItem>
        <MenuItem value="asia">Asia</MenuItem>
        <MenuItem value="europe">Europe</MenuItem>
        <MenuItem value="oceania">Oceania</MenuItem>
        {console.log(isDark)}
      </CustomSelect>
    </Box>
  );
};

export default InputFields;
