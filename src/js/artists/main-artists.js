const loadMore = document.querySelector(".art-btn-loadMore").addEventListener("click", loadMoreBtn);
const loader = document.getElementById('loader');

import { fetchArtist } from './artists-api.js';
import { markupCardArtist, hideLoader, showLoader, statusBtnLoadMore, scroll} from './artists-render.js';
let page = 1;
const limit = 8; 

  const getListArtist = async () => {
    try {
      showLoader();
      const data = await fetchArtist(page, limit);
      statusBtnLoadMore(page, data.totalArtists, limit)
      hideLoader();
      markupCardArtist(data.artists);
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
    getListArtist();
}
  
getListArtist();