import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const newImages = galleryItems
  .map(
    image =>
      `<li> 
    <a class="gallery__link" href="${image.original}"> 
    <img class="gallery__image" src="${image.preview}"
     alt="${image.description}" />
    </a> 
    </li>`
  )

  .join(' ');
gallery.style.listStyleType = 'none';
gallery.insertAdjacentHTML('beforeend', newImages);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  showCounter: true,
});
