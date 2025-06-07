'use strict';
  
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