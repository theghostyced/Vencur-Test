import React from "react";
import SearchPalette from "../template/SearchPalette";

function SearchField() {
  return (
    <div>
      <SearchPalette>
        <img src="/images/search.svg" alt="" />
        <input
          id="searchbar"
          type="search"
          className="placeholder:text-gray-500 text-gray-900"
          placeholder="Search"
        />
      </SearchPalette>
    </div>
  );
}

export default SearchField;
