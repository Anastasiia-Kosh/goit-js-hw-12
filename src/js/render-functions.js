import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadBtn = document.querySelector('.load-btn');

export function createGallery(images) {
  const markup = images
    .map(
      image => `<li class="gallery-item">
    <a class="gallery-link" href="${image.largeImageURL}">
      <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" />
    </a>
    <ul class="gallery-description">
  <li>
    <p class="gallery-text">Likes</p>
    <p class="gallery-value">${image.likes}</p>
  </li>
  <li>
    <p class="gallery-text">Views</p>
    <p class="gallery-value">${image.views}</p>
  </li>
  <li>
    <p class="gallery-text">Comments</p>
    <p class="gallery-value">${image.comments}</p>
  </li>
  <li>
    <p class="gallery-text">Downloads</p>
    <p class="gallery-value">${image.downloads}</p>
  </li>
</ul>
  </li>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('is-visible');
}

export function hideLoader() {
  loader.classList.remove('is-visible');
}
export function showLoadMoreButton() {
  loadBtn.classList.add('is-visible');
}
export function hideLoadMoreButton() {
  loadBtn.classList.remove('is-visible');
}
