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
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    //   bulletClass: 'custom-bullet',
    //   bulletActiveClass: 'custom-bullet-active',
    //   renderBullet: function (index, className) {
    //     // Только 3 точки!
    //     if (index > 2) return '';
    //     return `<span class="${className}"></span>`;
    //   },
    // },
    on: {
      slideChange: function () {
        const swiper = this;
        const total = swiper.slides.length;
        const current = swiper.realIndex;
    
        const groupSize = Math.ceil(total / 3);
        const group = Math.floor(current / groupSize);
    
        const bullets = document.querySelectorAll('.custom-bullet');
        bullets.forEach((b, i) =>
          b.classList.toggle('custom-bullet-active', i === group)
        );
      },
    },
  });

  // Закраска звёзд
  document.querySelectorAll('.star-rating').forEach(container => {
    const rating = Number(container.dataset.rating) || 0;
    const stars = container.querySelectorAll('.star-rating__star');

    stars.forEach((star, index) => {
      star.style.backgroundColor = index < rating ? '#A259FF' : '#555';
    });
  });
}