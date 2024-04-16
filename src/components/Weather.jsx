import React, { useState } from "react";
import SearchBar from "./SearchBar";
const Weather = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="weather-card">
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
    </div>
  );
};

export default Weather;
