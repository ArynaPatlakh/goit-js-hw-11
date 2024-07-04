// functions for HTTP

export function getImages(value) {
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
  return fetch(URL)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      } else {
        return res.json();
      }
    })
    .catch(err => `Error in FETCH: ${err}`);
}
