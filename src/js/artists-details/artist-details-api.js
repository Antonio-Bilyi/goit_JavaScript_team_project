const BASE_URL = 'https://sound-wave.b.goit.study/api';

export async function fetchArtistDetails(id) {
  console.log("id:",id);
  try {

    const response = await fetch(`${ BASE_URL }/artists/${id}`);
    return response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}


