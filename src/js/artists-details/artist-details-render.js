export function renderArtistModal(artist) {
  if (!artist || typeof artist !== 'object') {
    return '<p class="error">No artist data available</p>';
  }

  // Обробка років існування
  const yearsExistence = artist.startYear
    ? (artist.endYear ? `${artist.startYear} - ${artist.endYear}` : `${artist.startYear} - present`)
    : 'Information missing';

  // Список жанрів
  const genresList = Array.isArray(artist.genres) && artist.genres.length
    ? `<ul class="genres-list-details">
        ${artist.genres.map(genre => `<li class="genres-item-details">${genre}</li>`).join('')}
      </ul>`
    : '<p>Genres not specified</p>';

  // Список альбомів з треками
  const albumsList = Array.isArray(artist.albums) && artist.albums.length
    ? `<ul class="albums-list">
        ${artist.albums.map(album => {
          const tracksHeader = `
            <li class="tracks-header">
              <span>Track</span>
              <span>Time</span>
              <span>Link</span>
            </li>`;

          const tracksList = Array.isArray(album.tracks)
            ? album.tracks.map(track => {
                const youtubeIcon = track.youtube
                  ? `<a href="${track.youtube}" target="_blank" rel="noopener noreferrer" aria-label="YouTube: ${track.title}">
                      <svg width="16" height="16">
                        <use href="../img/symbol-defs.svg#icon-Youtube"></use>
                        <path d="M10 15l5-3-5-3v6z"/>
                        <path d="M21.8 7.2s-.2-1.4-.8-2c-.7-.8-1.5-.8-1.9-.9C15 4 12 4 12 4h0s-3 0-6 .3c-.8.1-1.6.6-2.1 1.4-.4.6-.5 1.4-.5 1.7-.1.5-.1 1.1-.1 1.7v1.8c0 .6 0 1.2.1 1.7 0 .3.1 1.1.5 1.7.5.8 1.3 1.3 2.1 1.4 1.5.1 6 .3 6 .3s3 0 6-.3c.7-.1 1.4-.6 1.9-1.4.6-.7.8-2 .8-2v-3.6z"/>
                      </svg>
                    </a>`
                  : '';

                return `
                  <li class="track-item">
                    <span class="track-title">${track.title}</span>
                    <span class="track-duration">${track.duration}</span>
                    <span class="track-youtube">${youtubeIcon}</span>
                  </li>`;
              }).join('')
            : '';

          return `
            <li class="album-item">
              <h4 class="album-title">${album.title}</h4>
              <ul class="tracks-list">
                ${tracksHeader}
                ${tracksList}
              </ul>
            </li>`;
        }).join('')}
      </ul>`
    : '<p>There are no albums</p>';

  return `
    <div class="modal">
      <button class="close-modal-btn" type="button">
        <svg class="icon-close-btn" width="16" height="16">
          <use href="../img/symbol-defs.svg#icon-close-btn"></use>
        </svg>
      </button>

      <h2 class="artist-name">${artist.name}</h2>
      <img class="img-details" src="${artist.image}" alt="Photo ${artist.name}" />

      <ul class="artist-info-list">
        <li><strong>Years active:</strong> ${yearsExistence}</li>
        <li><strong>Sex:</strong> ${artist.gender || 'Unknown'}</li>
        <li><strong>Members:</strong> ${artist.membersCount || 'Unknown'}</li>
        <li><strong>Country:</strong> ${artist.country || 'Unknown'}</li>
      </ul>

      <div class="biography-div">
        <h3 class="title-biography">Biography</h3>
        <p class="text-biography">${artist.biography || 'Biography missing'}</p>
      </div>

      <div class="genres-div">
        <h3 class="title-genres">Genres</h3>
        ${genresList}
      </div>

      <div class="albums-div">
        <h3 class="title-album">Albums</h3>
        ${albumsList}
      </div>
    </div>
  `;
}