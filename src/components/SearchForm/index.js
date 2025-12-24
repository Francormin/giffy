import React from "react";
import { useLocation } from "wouter";
import { LANGUAGES, RATINGS } from "constants/search";
import useForm from "hooks/useForm";
import "./styles.css";

const SearchForm = ({ initialKeyword = "", initialRating = "g", initialLanguage = "en" }) => {
  const { keyword, rating, language, updateKeyword, updateRating, updateLanguage, resetFilters } =
    useForm({
      initialKeyword,
      initialRating,
      initialLanguage
    });

  const [path, pushLocation] = useLocation();

  const handleChange = event => {
    updateKeyword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    pushLocation(`/search/${keyword}/${rating}/${language}`);
  };

  const handleChangeRating = event => {
    updateRating(event.target.value);
  };

  const handleChangeLanguage = event => {
    updateLanguage(event.target.value);
  };

  const handleResetFilters = () => {
    resetFilters();
  };

  return (
    <form onSubmit={handleSubmit} className="SearchForm">
      <div className="SearchForm-main">
        <input
          type="text"
          placeholder="Search a gif here..."
          value={keyword}
          onChange={handleChange}
        />
        <button
          type="submit"
          disabled={!keyword.length}
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>

      <div className="SearchForm-filters">
        <select value={rating} onChange={handleChangeRating}>
          <option disabled value="">Rating</option>
          {Object.entries(RATINGS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>

        <select value={language} onChange={handleChangeLanguage}>
          <option disabled value="">Language</option>
          {Object.entries(LANGUAGES).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>

        <button
          type="button"
          disabled={!keyword.length && rating === "g" && language === "en"}
          onClick={() => handleResetFilters()}
        >
          Reset Filters
        </button>
      </div>
    </form>
  );
};

export default React.memo(SearchForm);
