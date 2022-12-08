import React from "react";
import "../../style/search.css";

const Search = ({ text, search, onSearchChange }) => (
  <div>
    <div className="searchBox p2">
      <div className="text-2xl font-bold items-center"> {text} </div>
      <input
        id="userInput"
        className="search tc bg-lightest-purple placeholder-white items-center"
        type="search"
        placeholder="What do you want to go..."
        style={{
          display: "block",
          margin: "auto",
          border: "1px solid white",
          borderRadius: "30px",
          height: "45px",
          width: "500px",
          outline: "none",
          backgroundColor: "#30A1C9",
        }}
        value={search}
        onChange={(text) => onSearchChange(text)}
      />
    </div>
  </div>
);

export default Search;
