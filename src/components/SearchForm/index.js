import React, { useReducer } from "react";
import { useLocation } from "wouter";
import { LANGUAGES, RATINGS } from "constants/search";
import "./styles.css";

const ACTIONS = {
  SET_KEYWORD: "SET_KEYWORD",
  SET_RATING: "SET_RATING",
  SET_LANGUAGE: "SET_LANGUAGE"
};

const ACTIONS_REDUCERS = {
  [ACTIONS.SET_KEYWORD]: (state, action) => ({
    ...state,
    keyword: action.payload
  }),
  [ACTIONS.SET_RATING]: (state, action) => ({
    ...state,
    rating: action.payload
  }),
  [ACTIONS.SET_LANGUAGE]: (state, action) => ({
    ...state,
    language: action.payload
  })
};

const reducer = (state, action) => {
  const handler = ACTIONS_REDUCERS[action.type];
  return handler ? handler(state, action) : state;
};

const SearchForm = ({ initialKeyword = "", initialRating = "g", initialLanguage = "en" }) => {
  const [state, dispatch] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword),
    rating: initialRating,
    language: initialLanguage
  });

  const { keyword, rating, language } = state;

  const [path, pushLocation] = useLocation();

  const handleChange = event => {
    dispatch({ type: ACTIONS.SET_KEYWORD, payload: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    pushLocation(`/search/${keyword}/${rating}/${language}`);
  };

  const handleChangeRating = event => {
    dispatch({ type: ACTIONS.SET_RATING, payload: event.target.value });
  };

  const handleChangeLanguage = event => {
    dispatch({ type: ACTIONS.SET_LANGUAGE, payload: event.target.value });
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
        <option disabled value="">
          Rating
        </option>
        {Object.entries(RATINGS).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>

      <select value={language} onChange={handleChangeLanguage}>
        <option disabled value="">
          Language
        </option>
        {Object.entries(LANGUAGES).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </form>
  );
};

export default React.memo(SearchForm);
