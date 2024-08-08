// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('#searchImg');
const btn = document.querySelector('#searchBtn');
const listImages = document.querySelector('.listImages');

btn.addEventListener('click', e => {
  e.preventDefault();
  clearImages();
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
        imgList(photos.hits);
      }
    })
    .catch(error => console.log(error));
});

function fetchImages() {
  const searchParams = new URLSearchParams({
    key: '45320962-957458a2920d861910609dde6',
    q: `${input.value}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return fetch(`https://pixabay.com/api/?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
function imgList(photos) {
  const markup = photos
    .map(photo => {
      return `<li>
        <img src="${photo.webformatURL}" alt="${photo.tags}" style="width:360px; height:200px;"/>
        <div class="descr-wrapper">
        <p class="descr"><b>Tags</b>: ${photo.tags}</p>
        <p class="descr"><b>Likes</b>: ${photo.likes}</p>
        <p class="descr"><b>Views</b>: ${photo.views}</p>
        <p class="descr"><b>Comments</b>: ${photo.comments}</p>
        <p class="descr"><b>Downloads</b>: ${photo.downloads}</p>
        </div>
      </li>`;
    })
    .join('');

  listImages.insertAdjacentHTML('beforeend', markup);
}
function clearImages() {
  listImages.innerHTML = '';
}
