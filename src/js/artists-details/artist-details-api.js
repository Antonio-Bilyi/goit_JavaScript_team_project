const BASE_URL = 'https://sound-wave.b.goit.study/api';

export async function fetchArtistDetails(id) {
  try {
    const response = await fetch(`${BASE_URL}/artists/${id}`);
    // console.log('Fetching:', `${BASE_URL}/artists/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch artist details: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}


