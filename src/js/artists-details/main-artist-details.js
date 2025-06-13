import { fetchArtistDetails } from './artist-details-api.js';
import { renderArtistModal } from './artist-details-render.js';

// const load = document.querySelector(".loader");
const modalOverlay = document.querySelector('.modal-overlay');

export async function openArtistModal(event) {
  event.preventDefault();

  const button = event.target.closest('.art-btn-learnMore');
  if (!button) return;

  const artistId = button.dataset.id;
  const genre = button.dataset.style;

  let artistGenres = genre ? genre.split(',').map(g => g.trim()) : [];
 
  try {
    modalOverlay.classList.add('is-open');
    document.body.classList.add('modal-open');
    showLoader()
    const artist = await fetchArtistDetails(artistId);
    modalOverlay.innerHTML = renderArtistModal(artist, artistGenres); 
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
  modalOverlay.innerHTML = `<div class="loader"></div>`;
}
function hideLoader() {
  const loader = modalOverlay.querySelector('.loader');
  if (loader) loader.remove();
}
function showToast(message) {

  alert(message); 
};