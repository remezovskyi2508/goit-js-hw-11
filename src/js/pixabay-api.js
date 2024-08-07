// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('#searchImg');
const btn = document.querySelector('#searchBtn');

btn.addEventListener('click', e => {
  e.preventDefault();
  if (checkInput()) {
    fetchImages()
      .then(photo => renderUsers(photo))
      .catch(error => console.log(error));
  }
});

function checkInput() {
  if (input.value === '') {
    return iziToast.error({
      timeout: 3000,
      position: 'topRight',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    return false;
  }
  return true;
}

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

function renderUsers(photo) {
  // Функція для відображення отриманих фотографій
  console.log(photo);
  // Реалізуй тут логіку для відображення фотографій
}
