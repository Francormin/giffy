const getGifs = ({ keyword = "morty" } = {}) => {
  const params = `api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
  const apiUrl = `${process.env.REACT_APP_GIPHY_BASE_URL}${params}`;

  return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
      const { data = [] } = response;

      if (Array.isArray(data)) {
        const gifs = data.map(gif => {
          const { id, title, images } = gif;
          const { url } = images.original;

          return { id, title, url };
        });

        return gifs;
      }
    });
};

export default getGifs;
