import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/',
})

export const registerUser = async (username: string, email: string, password: string) => {
  try {
    const response = await axiosInstance.post(`/register`, {
      username,
      email,
      password,
    });
    return response.data; // Retorna a resposta do backend
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.error || 'Erro ao registrar usuário');
    }
    throw new Error('Erro na conexão com o servidor');
  }
};

export const loginUser = async (email: string, password: string) => {
    try {
        const response = await axiosInstance.post(`/login`, { email, password });
        return response.data; // O token será retornado aqui
    } catch (error: any) {
        if (error.response) {
            throw new Error(error.response.data.error || 'Erro ao fazer login');
        }
        throw new Error('Erro na conexão com o servidor');
    }
};