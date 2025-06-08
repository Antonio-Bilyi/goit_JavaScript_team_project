const artistsContainer = document.querySelector(".art-list-card");

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
  
const artists = [
  { name: "Ren", genre: "Alternative" },
  { name: "Unlike Pluto", genre: "Rock" },
  { name: "Aurora", genre: "Indie Pop" },
  { name: "Hozier", genre: "Soul Rock" },
  { name: "Girl in Red", genre: "Lo-fi Indie" },
  { name: "Joji", genre: "R&B" },
  { name: "Billie Eilish", genre: "Pop" },
  { name: "NF", genre: "Hip-hop" }
];

const itemsPerPage = 3;
let currentIndex = 0;

const list = document.querySelector(".art-list-card");
const loadMoreBtn = document.querySelector(".art-btn-loadMore");
const loader = document.getElementById("loader");

function showLoader() {
  loader.style.display = "flex";
  loadMoreBtn.style.display = "none";
}

function hideLoader() {
  loader.style.display = "none";
  loadMoreBtn.style.display = "flex";
}

function loadArtists() {
  showLoader();

  setTimeout(() => {
    const next = artists.slice(currentIndex, currentIndex + itemsPerPage);

    next.forEach(artist => {
      const li = document.createElement("li");
      li.className = "art-item";
      li.innerHTML = `
        <p class="art-list-name">${artist.name}</p>
        <p class="art-list-biography">${artist.genre}</p>
      `;
      list.appendChild(li);
    });

    currentIndex += itemsPerPage;

    if (currentIndex >= artists.length) {
      loadMoreBtn.style.display = "none";
    } else {
      hideLoader();
    }
  }, 1000);
}

loadMoreBtn.addEventListener("click", loadArtists);

loadArtists();