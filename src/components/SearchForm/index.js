import React, { useReducer } from "react";
import { useLocation } from "wouter";
import "./styles.css";

const RATINGS = ["g", "pg", "pg-13", "r"];

const ACTIONS = {
  SET_KEYWORD: "SET_KEYWORD",
  SET_RATING: "SET_RATING"
};

const ACTIONS_REDUCERS = {
  [ACTIONS.SET_KEYWORD]: (state, action) => ({
    ...state,
    keyword: action.payload,
    times: state.times + 1
  }),
  [ACTIONS.SET_RATING]: (state, action) => ({
    ...state,
    rating: action.payload
  })
};

const reducer = (state, action) => {
  const handler = ACTIONS_REDUCERS[action.type];
  return handler ? handler(state, action) : state;
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
      <span style={{ color: "white" }}>Searches made: {times}</span>
    </form>
  );
};

export default React.memo(SearchForm);
