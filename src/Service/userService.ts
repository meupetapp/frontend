import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `http://localhost:${process.env.NEXT_PUBLIC_PORT}`,
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

// Função para pegar o valor de um cookie pelo nome
export const getCookie = (cookieName: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${cookieName}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
};

// Função para pegar o token dos cookies
export const getTokenFromCookies = () => {
  return getCookie("token");
};

// Função para pegar o userId dos cookies
export const getUserIdFromCookies = () => {
  return getCookie("userID");
};

// Função para atualizar o usuário
export const updateUser = async (
  username: string,
  email: string,
  password: string,
  confirmPassword: string,
  birthday: string
) => {
  try {
    const token = getTokenFromCookies(); // Obtém o token usando a função de cookie

    if (!token) {
      throw new Error("Token não encontrado");
    }

    const response = await axiosInstance.put(
      `/user/update`, // Verifique se esta é a rota correta
      {
        username,
        email,
        password,
        confirmPassword,
        birthday,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Passa o token no header
        },
      }
    );

    return response.data;
  } catch (error: any) {
    console.error("Erro ao atualizar usuário:", error);
    throw error;
  }
};
