export default function imgList(photos) {
  const markup = photos
    .map(photo => {
      return `<li class="photo-item">
        <a href="${photo.largeImageURL}"><img class="img-item" src="${photo.webformatURL}" alt="${photo.tags}"/></a> 
        <div class="descr-wrapper">
        <p class="descr"><span>Likes</span> ${photo.likes}</p>
        <p class="descr"><span>Views</span> ${photo.views}</p>
        <p class="descr"><span>Comments</span> ${photo.comments}</p>
        <p class="descr"><span>Downloads</span> ${photo.downloads}</p>
        </div>
      </li>`;
    })
    .join('');
  return markup;
}
