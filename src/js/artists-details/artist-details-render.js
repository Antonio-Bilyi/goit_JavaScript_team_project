export function renderArtistModal(artist, genres) {
  if (!artist || typeof artist !== 'object') {
    return '<p class="error">No artist data available</p>';
  }
  // Роки існування
  const yearsExistence = artist.intFormedYear
    ? (artist.intDiedYear
        ? `${artist.intFormedYear} - ${artist.intDiedYear}`
        : `${artist.intFormedYear} - present`)
    : 'information missing';
  // Обробка жанрів (масив або рядок)
  // const genresArray = [genres];
  const genresArray = Array.isArray(genres)
    ? genres
    : typeof genres === 'string'
      ? genres.split(',').map(g => g.trim())
      : [];
  const genresList = genresArray.length > 0
    ? `<ul class="genres-list-details">
        ${genresArray.map(genre => `<li class="genres-item-details">${genre}</li>`).join('')}
      </ul>`
    : '<p>Genres not specified</p>';
  // Функція для побудови HTML одного треку
  const renderTrackItem = track => {
    const youtubeLinkHtml = track.movie
      ? `<a href="${track.movie}" target="_blank" rel="noopener noreferrer" aria-label="YouTube: ${track.strTrack}">
            <svg width="16" height="16">
              <use href="../img/symbol-defs.svg#icon-Youtube"></use>
            </svg>
         </a>`
      : '';
    return `
      <li class="track-item">
        <span class="track-title">${track.strTrack}</span>
        <span class="track-duration">${track.intDuration || 'N/A'}</span>
        <span class="track-youtube">${youtubeLinkHtml}</span>
      </li>`;
  };
  // Якщо є albumsList — використовуємо його
  let albumsList = '';
  if (Array.isArray(artist.albumsList) && artist.albumsList.length > 0) {
    albumsList = `<ul class="albums-list">
      ${artist.albumsList.map(album => {
        const tracks = Array.isArray(album.tracks) ? album.tracks : [];
        const tracksHeader = `
          <li class="tracks-header">
            <span>Track</span>
            <span>Time</span>
            <span>Link</span>
          </li>`;
        const tracksList = tracks.length > 0
          ? tracks.map(renderTrackItem).join('')
          : '<li class="track-item">No tracks available</li>';
        return `
          <li class="album-item">
            <h4 class="album-title">${album.strAlbum} (${album.intYearReleased || 'Unknown Year'})</h4>
            <ul class="tracks-list">
              ${tracksHeader}
              ${tracksList}
            </ul>
          </li>`;
      }).join('')}
    </ul>`;
  }
  // Якщо albumsList нема, але є tracksList — групуємо треки по альбомах
  else if (Array.isArray(artist.tracksList) && artist.tracksList.length > 0) {
    const albumsMap = {};
    artist.tracksList.forEach(track => {
      const albumName = track.strAlbum || 'Unknown Album';
      if (!albumsMap[albumName]) {
        albumsMap[albumName] = [];
      }
      albumsMap[albumName].push(track);
    });
    albumsList = `<ul class="albums-list">
      ${Object.entries(albumsMap).map(([albumName, tracks]) => {
        const tracksHeader = `
          <li class="tracks-header">
            <span>Track</span>
            <span>Time</span>
            <span>Link</span>
          </li>`;
        const tracksList = tracks.map(renderTrackItem).join('');
        return `
          <li class="album-item">
            <h4 class="album-title">${albumName}</h4>
            <ul class="tracks-list">
              ${tracksHeader}
              ${tracksList}
            </ul>
          </li>`;
      }).join('')}
    </ul>`;
  }
  // Якщо нема жодного джерела
  else {
    albumsList = '<p>There are no albums</p>';
  }
  return `<div class="modal">
    <button class="close-modal-btn" type="button">
      <svg class="icon-close-btn" width="16" height="16">
        <use href="../img/symbol-defs.svg#icon-close-btn"></use>
      </svg>
    </button>
    <h2 class="artist-name">${artist.strArtist || 'Unknown Artist'}</h2>
    <img class="img-details" src="${artist.strArtistThumb || 'placeholder-image.jpg'}" alt="Photo ${artist.strArtist || 'Unknown Artist'}" />
    <ul class="artist-info-list">
      <li class="item-info">
        <span class="info-label"><strong>Years active:</strong></span>
        <span class="info-value">${yearsExistence}</span>
      </li>
      <li class="item-info">
        <span class="info-label"><strong>Sex:</strong></span>
        <span class="info-value">${artist.strGender || 'Unknown'}</span>
      </li>
      <li class="item-info">
        <span class="info-label"><strong>Members:</strong></span>
        <span class="info-value">${artist.intMembers || 'Unknown'}</span>
      </li>
      <li class="item-info">
        <span class="info-label"><strong>Country:</strong></span>
        <span class="info-value">${artist.strCountry || 'Unknown'}</span>
      </li>
    </ul>
    <div class="biography-div">
      <h3 class="title-biography">Biography</h3>
      <p class="text-biography">${artist.strBiographyEN || 'Biography missing'}</p>
    </div>
    <div class="genres-div">
      <h3 class="title-genres">Genres</h3>
      ${genresList}
    </div>
    <div class="albums-div">
      <h3 class="albums">Albums</h3>
      ${albumsList}
    </div>
  </div>`;
}