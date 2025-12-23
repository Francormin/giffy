import React, { useReducer } from "react";
import { useLocation } from "wouter";
import "./styles.css";

const RATINGS = ["g", "pg", "pg-13", "r"];

const ACTIONS = {
  SET_KEYWORD: "SET_KEYWORD",
  SET_RATING: "SET_RATING"
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
        times: state.times + 1
      };
    case ACTIONS.SET_RATING:
      return {
        ...state,
        rating: action.payload
      };
    default: {
      return state;
    }
  }
};

const SearchForm = ({ initialKeyword = "", initialRating = "g" }) => {
  const [state, dispatch] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword),
    rating: initialRating,
    times: 0
  });

  const { keyword, rating, times } = state;

  const [path, pushLocation] = useLocation();

  const handleChange = event => {
    dispatch({ type: ACTIONS.SET_KEYWORD, payload: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    pushLocation(`/search/${keyword}/${rating}`);
  };

  const handleChangeRating = event => {
    dispatch({ type: ACTIONS.SET_RATING, payload: event.target.value });
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
      <p style={{ color: "white" }}>Searches made: {times}</p>
    </form>
  );
};

export default React.memo(SearchForm);
