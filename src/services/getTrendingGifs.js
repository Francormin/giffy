const getTrendingGifs = () => {
  const params = `/trending/searches?api_key=${process.env.REACT_APP_GIPHY_API_KEY}`;
  const apiUrl = `${process.env.REACT_APP_GIPHY_BASE_URL}${params}`;

  return fetch(apiUrl)
    .then(res => res.json())
    .then(({ data }) => data);
};

export default getTrendingGifs;
