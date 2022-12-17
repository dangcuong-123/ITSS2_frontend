import React from "react";
import "../../style/search.css";
import Input from "../Input";
import ButtonSearch from "../Button";
import { AdminTitle } from "../../style";
const Search = ({ text, search, onSearchChange }) => (
  <div>
    <span className="text-2xl font-bold mb-5 mt-0">Search plan</span>
    <div className="flex justify-between ml-2 mr-7">
      <Input
        placeholder="Where do you want to go ?"
        onChange={onSearchChange}
      />
      <ButtonSearch color="font-bold mr-0">Search</ButtonSearch>
    </div>
  </div>
);

export default Search;
