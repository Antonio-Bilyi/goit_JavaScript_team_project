


import Swiper from 'swiper';
import 'swiper/css';

import { fetchFeedbacks } from './feedback-api';
import { createFeedbackMarkup } from './feedback-render';

export async function initFeedbackSlider() {
  const container = document.querySelector('#feedback-list');
  if (!container) return;

  const feedbacks = await fetchFeedbacks();
  if (!Array.isArray(feedbacks)) return;

  container.innerHTML = feedbacks.map(createFeedbackMarkup).join('');

  new Swiper('.feedback-swiper', {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.custom-pagination',
      clickable: true,
      bulletClass: 'dot',
      bulletActiveClass: 'active',
      renderBullet: (index, className) => `<span class="${className}"></span>`,
    },
  });
}




