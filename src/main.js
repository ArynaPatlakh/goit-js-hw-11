// all logic for Web-Site
import './js/pixabay-api';
import './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  btnSubmit: document.querySelector('.js-submit'),
  input: document.querySelector('input'),
};

refs.btnSubmit.addEventListener('click', e => {
  e.preventDefault();
  const userValue = refs.input.value;
  userValue.trim();
  if (userValue.length !== 0 && userValue !== '') {
    getImages(userValue)
      .then(data => {
        if (data.total === 0) {
          iziToast.show({
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            backgroundColor: 'red',
            messageColor: 'white',
            position: 'topRight',
          });
        } else {
          //   console.log();
          // markUp(data);
        }
      })
      .catch(err => `Err in Fetch: ${err}`);
  }
});

function getImages(value) {
  const mainLink = 'https://pixabay.com/api/';
  const myKey = '44735338-079c6790302f7dc185545e42d';
  const params = new URLSearchParams({
    key: myKey,
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const URL = `${mainLink}?${params}`;

  //! Return massiv with a lot ob Object. I think that to pass something

  console.log(fetch(URL).then(res => res.json()));
  return fetch(URL).then(res => res.json());
}

// function markUp() {}
