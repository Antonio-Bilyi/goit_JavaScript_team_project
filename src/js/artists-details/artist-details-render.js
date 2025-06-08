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

    // currentIndex += itemsPerPage;

    if (currentIndex >= artists.length) {
      loadMoreBtn.style.display = "none";
    } else {
      hideLoader();
    }
  }, 1000);
}

loadMoreBtn.addEventListener("click", loadArtists);

loadArtists();
