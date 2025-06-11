export function createFeedbackMarkup({ rating, descr, name }) {
  const roundedRating = Math.round(rating);
  const stars = '★'.repeat(roundedRating) + '☆'.repeat(5 - roundedRating);
  return `
    <div class="feedback-card">
      <div class="feedback-stars">${stars}</div>
      <p class="feedback-text">${descr}</p>
      <p class="feedback-author">— ${name}</p>
    </div>
  `;
}
