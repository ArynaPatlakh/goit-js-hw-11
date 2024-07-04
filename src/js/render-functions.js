// function for update HTML by js

export function cardTemplate({
  largeImageURL,
  webformatURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  //   console.log(largeImageURL);
  console.log(webformatURL);
  return `
    <li>
    <a href="${largeImageURL}> 
      <img src="${webformatURL}" alt="${tags}"> 
      </a>
      <div class="'params">
      <div><h3>Likes</h3><p>${likes}</p></div>
      <div><h3>Views</h3><p>${views}</p></div>
      <div><h3>Comments</h3><p>${comments}</p></div>
      <div><h3>Downloads</h3><p>${downloads}</p></div>
      </div>
      
      </li>
      `;
}

export function cardsTemplate(cards) {
  return cards.map(cardTemplate).join('');
}
