import React from "react";
import "../../style/search.css";

const Search = ({ search, onSearchChange }) => (
  <div>
    <div className="searchBox pa2">
      <span className="text-2xl font-bold mb-3"> Where you want to go?</span>

      <form>
        <input
          id="userInput"
          className="search tc bg-lightest-purple placeholder-white"
          type="search"
          placeholder="search countries..."
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
      </form>
    </div>
  </div>
);

export default Search;
