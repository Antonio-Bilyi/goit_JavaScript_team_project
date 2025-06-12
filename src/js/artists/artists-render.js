const artistsContainer = document.querySelector(".art-list-card");
const loadMore = document.querySelector(".art-btn-loadMore");
const load = document.querySelector(".loader");
import icon from './../../assets/symbol-defs.svg';

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
      data-id="${_id}" 
      >Learn More
      <svg class="icon" width="24" height="24">
        <use href="${icon}#icon-caret-right"></use>
      </svg>
    </button>
  </li>
`).join('');
  
  artistsContainer.insertAdjacentHTML("beforeend", markup);
}
  
export function showLoader() {
  load.classList.add('loader');
};

export function hideLoader() {
  load.classList.remove('loader');  
};

export function statusBtnLoadMore(page, totalArtists, limit) {
  let totalPage = Math.ceil(totalArtists / limit);
  totalPage > page? showLoadMoreButton():hideLoadMoreButton();
}

export function showLoadMoreButton() {
  loadMore.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  loadMore.classList.add('hidden');
}

export function scroll() {
  const el = document.querySelector(".art-item");
  let ghtCard = el.getBoundingClientRect();
    window.scrollBy({
      top: (ghtCard.height * 2),
      behavior: "smooth",
    });
  }