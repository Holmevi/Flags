import "./InputFields.css";
import { Box, Select, MenuItem, TextField } from "@mui/material";
import React from "react";

const InputFields = ({ isDark, setIsDark, filterText, setFilterText, filterRegion, setFilterRegion }) => {
  return (
    <Box className="InputFields">
      <TextField
        className="InputCountry"
        id="input-country"
        label="Search for a country"
        variant="filled"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <Select
        className="SelectRegion"
        id="select-region"
        label="Region"
        variant="outlined"
        value={filterRegion}
        onChange={(e) => setFilterRegion(e.target.value)}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="africa">Africa</MenuItem>
        <MenuItem value="america">America</MenuItem>
        <MenuItem value="asia">Asia</MenuItem>
        <MenuItem value="europe">Europe</MenuItem>
        <MenuItem value="oceania">Oceania</MenuItem>
      </Select>
    </Box>
  );
};

export default InputFields;