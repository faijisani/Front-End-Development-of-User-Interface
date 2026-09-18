import React from "react";

function SearchBar({ value, onChange }) {
  return (
    <input
      className="search-box"
      type="text"
      placeholder="Search government services..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar;