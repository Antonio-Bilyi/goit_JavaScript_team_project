import axios from 'axios';

const BASE_URL = 'https://sound-wave.b.goit.study/api';

export async function fetchFeedbacks() {
  try {
    console.log('Запрос к API...');
    const response = await axios.get(`${BASE_URL}/feedbacks`);
    const feedbacks = response.data.data; // важная правка

    return Array.isArray(feedbacks) ? feedbacks : [];
  } catch (error) {
    console.error('Ошибка при загрузке отзывов:', error);
    return [];
  }
}
