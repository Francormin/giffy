import React, { useState } from "react";
import { useLocation } from "wouter";
import "./styles.css";

const RATINGS = ["g", "pg", "pg-13", "r"];

const SearchForm = ({ initialKeyword = "", initialRating = "g" }) => {
  const [keyword, setKeyword] = useState(decodeURIComponent(initialKeyword));
  const [rating, setRating] = useState(initialRating);
  const [path, pushLocation] = useLocation();

  const handleChange = event => {
    setKeyword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    pushLocation(`/search/${keyword}/${rating}`);
  };

  const handleChangeRating = event => {
    setRating(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="SearchForm">
      <input
        type="text"
        placeholder="Search a gif here..."
        value={keyword}
        onChange={handleChange}
      />
      <button onClick={handleSubmit} disabled={!keyword.length}>
        Search
      </button>
      <select value={rating} onChange={handleChangeRating}>
        <option disabled>Rating type</option>
        {RATINGS.map(ratingOption => (
          <option key={ratingOption}>{ratingOption}</option>
        ))}
      </select>
    </form>
  );
};

export default React.memo(SearchForm);
