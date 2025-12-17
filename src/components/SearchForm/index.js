import React, { useState } from "react";

const SearchForm = ({ onSubmit }) => {
  const [keyword, setKeyword] = useState("");
  
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ keyword });
  };

  const handleChange = event => {
    setKeyword(event.target.value);
  };

  return (
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
  );
}

export default React.memo(SearchForm);
