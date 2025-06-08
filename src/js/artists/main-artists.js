import { fetchArtist } from './artists-api.js';
import { markupCardArtist } from './artists-render.js';

const loadMoreBtn = document.querySelector('.art-btn-loadMore');
const loader = document.getElementById('loader');

let page = 1;
const limit = 8;
let totalPages = null;

function showLoader() {
  loader.classList.add('is-visible');
  loadMoreBtn.classList.add('is-hidden');
}

function hideLoader() {
  loader.classList.remove('is-visible');
  loadMoreBtn.classList.remove('is-hidden');
}

function hideLoadMoreBtn() {
  loadMoreBtn.classList.add('is-hidden');
}

async function getListArtist() {
  try {
    showLoader();
    const data = await fetchArtist(page, limit);
    markupCardArtist(data.artists);

    // Встановлюємо загальну кількість сторінок лише один раз
    if (!totalPages) {
      totalPages = Math.ceil(data.totalArtists / limit);
    }

    // Перевірка: якщо досягли останньої сторінки — ховаємо кнопку
    if (page >= totalPages) {
      hideLoadMoreBtn();
    }

    page++;
  } catch (error) {
    console.error("Помилка в getListArtist:", error);
  } finally {
    hideLoader();
  }
}

// Перший рендер
getListArtist();

// Обробник Load More
loadMoreBtn.addEventListener('click', getListArtist);

