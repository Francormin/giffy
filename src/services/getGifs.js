const API_KEY = "AdDW8IR9s2Mvo2Ony2jTWRLZF0V7Fdy1";

const getGifs = ({ keyword = "morty" } = {}) => {
  const baseUrl = "https://api.giphy.com/v1/gifs/search?";
  const params = `api_key=${API_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
  const apiUrl = `${baseUrl}${params}`;

  return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
      const { data = [] } = response;
      if (Array.isArray(data)) {
        const gifs = data.map(gif => {
          const { images, title, id } = gif;
          const { url } = images.original;
          return { title, id, url };
        });
        return gifs;
      }
    });
};

export default getGifs;
