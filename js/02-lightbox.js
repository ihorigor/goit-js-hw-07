import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryEl = document.querySelector('.gallery');
console.log(galleryEl);

function makeGalleryImgMarkup({ preview, original, description }) {
	return `<li>
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a></li>`;
}
console.log('makeGalleryImgMarkup:  ', makeGalleryImgMarkup);

function makeGalleryMarkup(array) {
	return array.map(makeGalleryImgMarkup).join('');
}
function renderMarkup(markup) {
	galleryEl.insertAdjacentHTML('afterbegin', markup);
}
const galleryMarkup = makeGalleryMarkup(galleryItems);
renderMarkup(galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
	captionsData: 'alt',
	captionDelay: 250,
});

console.log(lightbox);
