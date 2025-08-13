const getGifById = ({ id } = {}) => {
  const params = `${id}?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&rating=g`;
  const apiUrl = `${process.env.REACT_APP_GIPHY_BASE_URL}${params}`;

  return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
      const { data = {} } = response;
      
      if (Object.keys(data).length) {
        const { id, type, title, alt_text, rating, username, images } = data;
        const { url } = images.original;

        return {
          id,
          type,
          title,
          description: alt_text,
          rating,
          username,
          url
        };
      }
    })
    .catch(error => console.error("Error fetching gif by ID:", error));
};

export default getGifById;
