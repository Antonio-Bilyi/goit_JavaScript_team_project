'use strict';

const artistsContainer = document.querySelector(".art-list-card");

export function markupCardArtist(data) {
    let widthWindows = document.documentElement.clientWidth;
    let artTextRow = widthWindows <= 768 ? 50 : 145;

    const markup = data.map(({ _id, strArtist, strBiographyEN, strArtistThumb, genres }) => `
  <li class="art-item">
    <img class="art-img" src="${strArtistThumb}" alt="${strArtist}" />
    <ul class="art-genre-list">
      ${genres.map(genre => `<li class="art-genre-list-item">${genre}</li>`).join('')}
    </ul>
    <h4 class="art-list-name">${strArtist}</h4>
    <p class="art-list-biography">${strBiographyEN.slice(0, artTextRow)}...</p>
    <button 
      type="button" 
      class="art-btn-learnMore" 
      data-id="${_id}">Learn More
      <svg class="icon" width="24" height="24">
        <use href="./../../img/symbol-defs.svg#icon-caret-right"></use>
      </svg>
    </button>
  </li>
`).join('');
    artistsContainer.insertAdjacentHTML("beforeend", markup);
  }
  