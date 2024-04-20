import "./InputFields.css";
import React from "react";

const InputFields = ({
  isDark,
  setIsDark,
  filterText,
  setFilterText,
  filterRegion,
  setFilterRegion,
}) => {
  return (
    <div className="InputFields">
      <input
        className="InputCountry"
        id="input-country"
        type="text"
        placeholder="Search for a country"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <select
        className="SelectRegion"
        id="select-region"
        value={filterRegion}
        onChange={(e) => setFilterRegion(e.target.value)}
      >
        <option value="all">All</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};

export default InputFields;
