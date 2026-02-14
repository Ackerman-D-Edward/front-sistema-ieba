import api from './api'

export const authService = {
  async login(credentials: { email: string; password: any }) {
    const response = await api.post('/login', credentials)

    // Se a API retornar o token, salvamos no localStorage
    if (response.data.token) {
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('user', JSON.stringify(response.data.user))
    }

    return response.data
  },

  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }
}
