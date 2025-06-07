import { fetchArtistDetails } from './artist-details-api.js';
import { renderArtistModal } from './artist-details-render.js';

document.addEventListener('DOMContentLoaded', () => {
  const modalOverlay = document.querySelector('.modal-overlay');

async function openArtistModal(artistId) {
  try {
    showLoader();
    const artist = await fetchArtistDetails(artistId);
    modalOverlay.innerHTML = renderArtistModal(artist);
    modalOverlay.classList.add('is-open');
    document.body.classList.add('modal-open');
    addEventListeners();
  } catch (error) {
    showToast('Failed to load artist data.');
  } finally {
    hideLoader();
  }
}

function closeModal() {
  modalOverlay.classList.remove('is-open');
  document.body.classList.remove('modal-open');
  modalOverlay.innerHTML = ''; // очищення
  removeEventListeners();
}

function handleOverlayClick(event) {
  if (event.target === modalOverlay) closeModal();
}

function handleEscKey(event) {
  if (event.key === 'Escape') closeModal();
}

function addEventListeners() {
  const closeBtn = modalOverlay.querySelector('.close-modal-btn');
  closeBtn?.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', handleOverlayClick);
  window.addEventListener('keydown', handleEscKey);
}

function removeEventListeners() {
  window.removeEventListener('keydown', handleEscKey);
  modalOverlay.removeEventListener('click', handleOverlayClick);
}

function showLoader() {
  modalOverlay.innerHTML = `<div class="loader">Loading...</div>`;
}
function hideLoader() {
  const loader = modalOverlay.querySelector('.loader');
  if (loader) loader.remove();
}
function showToast(message) {
  alert(message); 
}


// тимчасово
  const openBtn = document.getElementById('testOpenBtn');
  const input = document.getElementById('artistIdInput');

  openBtn?.addEventListener('click', () => {
    const id = input?.value.trim();
    if (id) {
      openArtistModal(id);
    } else {
      alert('Enter the artist ID. For example: 64f389465ae26083f39b1798');
    }
  });
});
// тимчасово