import axios from 'axios';
export function getImagesByQuery(query) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '55008864-d5a1decafbeed91a0d2a4411c',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
      },
    })
    .then(response => response.data);
}
