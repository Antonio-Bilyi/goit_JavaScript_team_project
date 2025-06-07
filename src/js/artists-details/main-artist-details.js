import { fetchArtistDetails } from './artist-details-api.js';
import { renderArtistModal } from './artist-details-render.js';

const modalOverlay = document.querySelector('.modal-overlay');

export async function openArtistModal(artistId) {
  try {
    showLoader();
    const artist = await fetchArtistDetails(artistId);
    modalOverlay.innerHTML = renderArtistModal(artist);
    modalOverlay.classList.add('is-open');
    document.body.classList.add('modal-open');
    addEventListeners();
  } catch (error) {
    showToast('Не вдалося завантажити дані виконавця.');
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
  modalOverlay.innerHTML = `<div class="loader">Завантаження...</div>`;
}
function hideLoader() {
  const loader = modalOverlay.querySelector('.loader');
  if (loader) loader.remove();
}
function showToast(message) {
  alert(message); 
}