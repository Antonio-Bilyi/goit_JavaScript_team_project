const BASE_URL = 'https://sound-wave.b.goit.study/api';

export async function fetchArtistDetails(id) {
  console.log("id:",id);
  try {

    const response = await fetch(`${ BASE_URL }/artists/${id}`);

    // if (!response.ok) {
    //   throw new Error(`Failed to fetch artist details: ${response.status}`);
    // }
    return response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}


