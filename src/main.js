import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

const refs = {
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  userForm: document.querySelector('.form'),
  loadBtn: document.querySelector('.load-btn'),
};

let page = 1;
let perPage = 15;
let totalHits;
let userSearch = '';

refs.userForm.addEventListener('submit', async e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  userSearch = formData.get('search-text').trim();
  if (!userSearch) return;

  clearGallery();
  showLoader();

  try {
    page = 1;
    const data = await getImagesByQuery(userSearch, page);
    totalHits = data.totalHits;
    if (!data.hits.length) {
      iziToast.show({
        message: 'Sorry, there are no images matching your search query.',
        position: 'topRight',
        backgroundColor: '#e03710',
        messageColor: 'white',
      });
      return;
    }
    createGallery(data.hits);
    showLoadMoreButton();
  } catch (error) {
    iziToast.show({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
      backgroundColor: '#ef4040',
      messageColor: 'white',
    });
  } finally {
    hideLoader();
  }
});

refs.loadBtn.addEventListener('click', async e => {
  e.preventDefault();
  page += 1;
  refs.gallery.appendChild(refs.loader);
  showLoader();
  hideLoadMoreButton();
  try {
    const data = await getImagesByQuery(userSearch, page);
    createGallery(data.hits);
    showLoadMoreButton();
    const galleryCard = document.querySelector('.gallery-item');
    if (galleryCard) {
      const cardHeight = galleryCard.getBoundingClientRect().height;
      window.scrollBy({
        top: 2 * cardHeight,
        behavior: 'smooth',
      });
    }
    if (page * perPage >= totalHits) {
      hideLoadMoreButton();
      return iziToast.show({
        position: 'topRight',
        message: "We're sorry, there are no more posts to load",
        backgroundColor: '#33e917',
        messageColor: 'white',
      });
    }
  } catch (error) {
    iziToast.show({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
      backgroundColor: '#ef4040',
      messageColor: 'white',
    });
  } finally {
    hideLoader();
  }
});
