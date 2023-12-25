import axios from 'axios';

const API_KEY = '82a743a9-e768-4771-baba-a289a58c6b4e'; // Здесь подставь свой api ключ

const api = axios.create({
  baseURL: 'https://kinopoiskapiunofficial.tech/',
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': API_KEY,
  },
});

export const getFilms = async () => {
  try {
    const response = await api.get('/api/v2.2/films');
    return response.data;
  } catch (error) {
    console.error('Error fetching films', error);
    throw error;
  }
};