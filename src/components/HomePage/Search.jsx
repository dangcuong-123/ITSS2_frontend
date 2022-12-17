import React, { useState, useEffect } from "react";
import "../../style/search.css";
import Input from "../Input";
import ButtonSearch from "../Button";
import { AdminTitle } from "../../style";
function Search({ onSearchChange }) {
  const [value, setValue] = useState("");

  const handleSearch = () => {
    if (value != "") {
      onSearchChange(value);
    }
  };

  return (
    <div>
      <span className="text-2xl font-bold mb-5 mt-0">Search plan</span>
      <div className="flex justify-between ml-2 mr-7">
        <Input
          placeholder="Where do you want to go ?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <ButtonSearch color="font-bold mr-0" onClick={handleSearch}>
          Search
        </ButtonSearch>
      </div>
    </div>
  );
}

export default Search;
