//! All logic for Web-Site

import { getImages } from './js/pixabay-api';
import { cardTemplate } from './js/render-functions';
import { cardsTemplate } from './js/render-functions';

//* Library
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import cssLoader from 'css-loader'

const refs = {
  form: document.querySelector('.search-form'),
  input: document.querySelector('input'),
  list: document.querySelector('.gallery'),
  load: document.querySelector('.loader'),
};

const lightbox = new SimpleLightbox('.gallery a ', {
  captionDelay: 250,
  captionsData: 'alt',
});

refs.form.addEventListener('submit', btnEvent);

function btnEvent(e) {
  e.preventDefault();
  const userValue = refs.input.value.trim();
  if (userValue.length !== 0 && userValue !== '') {
    refs.load.classList.remove('hidden');
    getImages(userValue)
      .then(data => {
        if (data.total === 0) {
          refs.load.classList.add('hidden');
          refs.input.value = '';
          refs.list.textContent = '';
          iziToast.show({
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            backgroundColor: '#EF4040',
            messageColor: 'white',
            position: 'topRight',
            class: 'error',
          });
        } else {
          const markUp = cardsTemplate(data.hits);
          refs.list.innerHTML = markUp;

          lightbox.refresh();

          refs.load.classList.add('hidden');

          refs.input.value = '';
        }
      })
      .catch(err => console.error(err));
  }
}
