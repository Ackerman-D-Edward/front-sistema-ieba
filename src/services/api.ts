import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api-sistema-ieba.onrender.com/api', // tua API Laravel
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})


// Interceptador de requisição: adiciona o token se existir
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})


export default api;
