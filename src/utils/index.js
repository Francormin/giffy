export const fromApiResponseToGifs = apiResponse => {
  const { data } = apiResponse;

  if (Array.isArray(data)) {
    if (data.length === 0) return data;

    const gifs = data.map(gif => {
      const { id, type, title, alt_text, rating, username, images } = gif;
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
    });

    return gifs;
  }

  if (Object.keys(data).length === 0) return data;

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
};
