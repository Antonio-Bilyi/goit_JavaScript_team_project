// HTML-елементи
const artistsContainer = document.querySelector(".art-list-card");
const loadMoreBtn = document.querySelector(".art-btn-loadMore");
const loader = document.getElementById("loader");


const itemsPerPage = 3;
let currentIndex = 0;

export function markupCardArtist(data) {
  let widthWindows = document.documentElement.clientWidth;
  let artTextRow = widthWindows <= 768 ? 50 : 145;

  const markup = data.map(({ strArtist, strBiographyEN, strArtistThumb, genres }) => `
    <li class="art-item">
      <img class="art-img" src="${strArtistThumb}" alt="${strArtist}" />
      <ul class="art-genre-list">
        ${genres.map(genre => `<li class="art-genre-list-item">${genre}</li>`).join('')}
      </ul>
      <h4 class="art-list-name">${strArtist}</h4>
      <p class="art-list-biography">${strBiographyEN.slice(0, artTextRow)}...</p>
      <button type="button" class="art-btn-learnMore">Learn More
        <svg class="icon" width="24" height="24">
          <use href="./../../img/symbol-defs.svg#icon-caret-right"></use>
        </svg>
      </button>
    </li>
  `).join('');
  artistsContainer.insertAdjacentHTML("beforeend", markup);
}
function loadArtists() {
  showLoader();

  setTimeout(() => {
    const nextArtists = artists.slice(currentIndex, currentIndex + itemsPerPage);
    markupCardArtist(nextArtists);
    currentIndex += itemsPerPage;

    hideLoader();

    if (currentIndex >= artists.length) {
      loadMoreBtn.style.display = "none";
    }
  }, 500);
}

function showLoader() {
  loader.classList.add('is-visible');
  loadMoreBtn.classList.add('is-hidden');
}

function hideLoader() {
  loader.classList.remove('is-visible');
  loadMoreBtn.classList.remove('is-hidden');
}

loadMoreBtn.addEventListener("click", loadArtists);

loadArtists();

