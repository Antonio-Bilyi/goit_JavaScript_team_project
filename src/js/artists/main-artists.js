'use strict';
import { openArtistModal } from '../artists-details/main-artist-details.js'; 
// шлях до модального вікна 
import { fetchArtist } from './artists-api.js';
import { markupCardArtist } from './artists-render.js';
let page = 1;
const limit = 8; 

  const getListArtist = async () => {
    try {
        const date = await fetchArtist(page, limit);
        markupCardArtist(date.artists);
        // console.log(date);  
    } catch (error) {
      console.log("Помилка в getListArtist:", error);
    }
  };
  
getListArtist();

// слухач на кнопку щоб відкрити модальне вікно
const artistsContainer = document.querySelector(".art-list-card");

artistsContainer.addEventListener('click', (e) => {
  const learnMoreBtn = e.target.closest('.art-btn-learnMore');
  if (!learnMoreBtn) return;

  const artistId = learnMoreBtn.dataset.id;
  if (artistId) {
    openArtistModal(artistId); 
  }
});