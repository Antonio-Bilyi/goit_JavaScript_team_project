import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'css-star-rating/css/star-rating.min.css';

import { Navigation, Pagination } from 'swiper/modules';
import { fetchFeedbacks } from './feedback-api';
import { createFeedbackMarkup } from './feedback-render';

export async function initFeedbackSlider() {
  const container = document.querySelector('#feedback-list');
  if (!container) return;

  const feedbacks = await fetchFeedbacks();
  if (!Array.isArray(feedbacks)) return;

  // ограничим до 10
  const limitedFeedbacks = feedbacks.slice(0, 10);

  container.innerHTML = limitedFeedbacks
    .map(fb => `<div class="swiper-slide">${createFeedbackMarkup(fb)}</div>`)
    .join('');

  await new Promise(resolve => setTimeout(resolve, 0));

  new Swiper('.feedback-swiper', {
    modules: [Navigation, Pagination],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    
  });

  document.querySelectorAll('.star-rating').forEach(container => {
    const rating = Number(container.dataset.rating) || 0;
    const stars = container.querySelectorAll('.star-rating__star');

    stars.forEach((star, index) => {
      star.style.backgroundColor = index < rating ? '#A259FF' : '#555'; // фиолетовые
    });
  });
}
