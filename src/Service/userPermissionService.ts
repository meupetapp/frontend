import axios from 'axios';
import { getCookie } from "./petService";
const axiosInstance = axios.create({
  baseURL: `http://localhost:${process.env.NEXT_PUBLIC_PORT}`,
})

export const createUserPermission = async (userEmail: string, petId: string, permissions: string[]) => {
  try {
    const token = getCookie('token');  // Obtém o token do cookie ou de onde estiver armazenado
    
    // Exibe os dados que estão sendo enviados para o backend
    console.log('Enviando dados para o backend:', {
      userEmail,
      petId,
      permissions,
      token,
    });
    
    const response = await axiosInstance.post(
      '/permission',
      { userEmail, petId, permissions },  // Agora permissions é uma string
      {
        headers: {
          Authorization: `Bearer ${token}`,  // Adiciona o token de autenticação
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar permissão:', error);
    throw error;
  }
};
