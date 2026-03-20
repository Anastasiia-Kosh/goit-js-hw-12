import axios from 'axios';

export async function getImagesByQuery(query, page) {
  const res = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '55008864-d5a1decafbeed91a0d2a4411c',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page: page,
    },
  });
  return res.data;
}
