import React, { useState } from "react";
import { useLocation } from "wouter";
import "./styles.css";

const SearchForm = () => {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();
  
  const handleSubmit = event => {
    event.preventDefault();
    pushLocation(`/search/${keyword}`)
  };

  const handleChange = event => {
    setKeyword(event.target.value);
  };

  return (
    <div className="SearchForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search a gif here..."
          value={keyword}
          onChange={handleChange}
        />
        <button onClick={handleSubmit} disabled={!keyword.length}>
          Search
        </button>
      </form>
    </div>
  );
}

export default React.memo(SearchForm);
