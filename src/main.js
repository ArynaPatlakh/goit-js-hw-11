//! All logic for Web-Site

import { getImages } from './js/pixabay-api';
import { cardTemplate } from './js/render-functions';
import { cardsTemplate } from './js/render-functions';

//* Library
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// const lightbox = new SimpleLightbox('gallery a', {
//   captionDelay: 250,
//   captionsData: 'href',
// });

const refs = {
  form: document.querySelector('.search-form'),
  btnSubmit: document.querySelector('.js-submit'),
  input: document.querySelector('input'),
  list: document.querySelector('.gallery'),
  images: document.querySelector('img'),
};

const lightbox = new SimpleLightbox('.gallery li a', {
  captionDelay: 250,
  captionsData: 'alt',
});

refs.form.addEventListener('submit', btnEvent);

function btnEvent(e) {
  e.preventDefault();
  const userValue = refs.input.value.trim();

  if (userValue.length !== 0 && userValue !== '') {
    getImages(userValue)
      .then(data => {
        if (data.total === 0) {
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
          refs.input.value = '';
        }
      })
      .catch(err => console.error(err));
  }
}

// https://pixabay.com/get/gbae0d2a049180febfc8fb1e2bd87407de1406c47f8551f16e83e751d199676152087bafad3aac0569e9761d3ea1b5f8b7a4f9ce8130f41752d2dfdb324f8abe8_1280.jpg
//https://pixabay.com/get/gbae0d2a049180febfc8fb1e2bd87407de1406c47f8551f16e83e751d199676152087bafad3aac0569e9761d3ea1b5f8b7a4f9ce8130f41752d2dfdb324f8abe8_1280.jpg%20class=
