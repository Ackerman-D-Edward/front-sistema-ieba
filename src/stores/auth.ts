import { defineStore } from 'pinia';
import api from '@/services/api';
import router from '@/router';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('auth_token') || null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
  },

  actions: {
    async login(credentials) {
      try {
        const response = await api.post('/api/login', credentials);
        const { token, user } = response.data;

        this.token = token;
        this.user = user;

        localStorage.setItem('auth_token', token);
        localStorage.setItem('user', JSON.stringify(user));

        router.push('/');
        return { success: true };
      } catch (error) {
        const errors = error.response?.data?.errors || {};
        return { success: false, errors };
      }
    },

    async register(userData) {
      try {
        const response = await api.post('/api/register', userData);
        const { token, user } = response.data;

        this.token = token;
        this.user = user;

        localStorage.setItem('auth_token', token);
        localStorage.setItem('user', JSON.stringify(user));

        router.push('/');
        return { success: true };
      } catch (error) {
        const errors = error.response?.data?.errors || {};
        return { success: false, errors };
      }
    },

    async logout() {
      try {
        await api.post('/api/logout');
      } finally {
        this.token = null;
        this.user = null;
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user');
        router.push('/login');
      }
    },
  },
});
