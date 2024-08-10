// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import imgList from './js/render-functions.js';
import fetchImages from './js/pixabay-api.js';

const btn = document.querySelector('#searchBtn');
const listImages = document.querySelector('.list-images');

btn.addEventListener('click', e => {
  e.preventDefault();
  listImages.innerHTML = '';
  listImages.innerHTML = '<span class="loader"></span>';
  fetchImages()
    .then(photos => {
      if (photos.hits.length === 0) {
        iziToast.error({
          timeout: 3000,
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        const markup = imgList(photos.hits);
        listImages.insertAdjacentHTML('beforeend', markup);
      }
    })
    .catch(error => console.log(error));

  setTimeout(() => {});
});

// const gallery = new SimpleLightbox('.list-images a', {
//   captionsData: 'alt',
//   captionDelay: 250,
// });
