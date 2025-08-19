export const fromApiResponseToGifs = apiResponse => {
  const { data = [] } = apiResponse;

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
};
