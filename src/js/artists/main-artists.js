const loadMore = document.querySelector(".art-btn-loadMore").addEventListener("click", loadMoreBtn);
const loader = document.getElementById('loader');

import { openArtistModal } from './../artists-details/main-artist-details.js'; 
import { fetchArtist } from './artists-api.js';
import { markupCardArtist, hideLoader, showLoader, statusBtnLoadMore, scroll, hideLoadMoreButton} from './artists-render.js';
let page = 1;
const limit = 8; 

  const getListArtist = async () => {
    try {
      showLoader();
      const data = await fetchArtist(page, limit);   
      hideLoader();
      statusBtnLoadMore(page, data.totalArtists, limit);
      markupCardArtist(data.artists);
      const selectorsBtn = document.querySelectorAll(".art-btn-learnMore");
      selectorsBtn.forEach(selector => selector.addEventListener(("click"), openArtistModal));
    } catch (error) {
      console.error("Помилка в getListArtist:", error);
    }
    if (page > 1) {
      scroll();
    } 
   
  };
  
function loadMoreBtn(event) {
  event.preventDefault();
  ++page;
    hideLoadMoreButton();
    getListArtist();
}
  
getListArtist();

