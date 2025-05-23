import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = async () => {
  try {
    const response = await axios.get(`${API_URL}/character`);
    return response.data.results;
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    return [];
  }
};
