'use strict';

const artistsContainer = document.querySelector(".art-list-card");

export function markupCardArtist(date) {
    let markup = date.map(
        ({ strArtist, strBiographyEN, strArtistThumb, genres }) => 
                `<li class="art-item">
                <img class="art-img" src="${strArtistThumb}" alt="${strArtist}" />
                <ul class="art-genre-list"><li class="art-genre-list-item">${genres.join( ).replaceAll(",",'</li><li class="art-genre-list-item">')}</li></ul>             
                <h4 class="art-list-name">${strArtist}</h4>
                <p class="art-list-biography">${strBiographyEN.slice(0, 145)}...</p>
              <button type="button" class="art-btn-learnMore"> Learn More </button>  
     `).join('');
            
    // console.log('markup:', markup);
    artistsContainer.insertAdjacentHTML("beforeend", markup);
}