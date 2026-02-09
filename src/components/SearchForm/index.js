import React from "react";
import { useLocation } from "wouter";
import { LANGUAGES, RATINGS } from "constants/search";
import useForm from "hooks/useForm";
import Button from "components/Button";
import { FiltersRow, Form, Input, MainRow, Select } from "./styles";

const SearchForm = ({ initialKeyword = "", initialRating = "g", initialLanguage = "en" }) => {
  const { keyword, rating, language, updateKeyword, updateRating, updateLanguage, resetFilters } =
    useForm({
      initialKeyword,
      initialRating,
      initialLanguage
    });

  const [, navigate] = useLocation();

  const handleChange = event => {
    updateKeyword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    navigate(`/search/${keyword}/${rating}/${language}`);
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
    <Form onSubmit={handleSubmit}>
      <MainRow>
        <Input
          type="text"
          placeholder="Search a gif here..."
          value={keyword}
          onChange={handleChange}
        />

        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={!keyword.length}
        >
          Search
        </Button>
      </MainRow>

      <FiltersRow>
        <Select value={rating} onChange={handleChangeRating}>
          <option disabled value="">
            Rating
          </option>

          {Object.entries(RATINGS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Select>

        <Select value={language} onChange={handleChangeLanguage}>
          <option disabled value="">
            Language
          </option>

          {Object.entries(LANGUAGES).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Select>

        <Button
          type="button"
          variant="secondary"
          size="sm"
          disabled={!keyword.length && rating === "g" && language === "en"}
          onClick={handleResetFilters}
        >
          Reset Filters
        </Button>
      </FiltersRow>
    </Form>
  );
};

export default SearchForm;
