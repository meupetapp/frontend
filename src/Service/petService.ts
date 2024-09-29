import axios from 'axios';

// Função para pegar o valor de um cookie pelo nome
export const getCookie = (cookieName: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${cookieName}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
};

// Função para pegar o token e o userId dos cookies
const getTokenFromCookies = () => {
  return getCookie('token');
};

const getUserIdFromCookies = () => {
  return getCookie('userID');
};

// Criação dinâmica do axiosInstance com o token do cookie
const axiosInstance = axios.create({
  baseURL: `http://localhost:${process.env.NEXT_PUBLIC_PORT}`,
});

// Função para criar um novo pet com foto genérica
export const createPet = async (
  name: string, 
  species: string, 
  breed: string, 
  birthDate: string, 
  sex: string, 
  color: string, 
  isAdopted: boolean, 
  dateAdoption?: string, 
  photo?: string
) => {
  try {
    const token = getCookie('token'); 
    const userId = getCookie('userID'); 
    
    if (!token) {
      throw new Error('Token não encontrado');
    }

    // Define um URL genérico de foto se `photo` não for fornecido
    const defaultPhotoUrl = 'https://example.com/photos/rex.jpg';
    
    const response = await axiosInstance.post(`/pet`, {
      name,
      species,
      breed,
      birthDate,
      sex,
      color,
      isAdopted,
      dateAdoption,
      photo: photo || defaultPhotoUrl, // Usa a foto genérica se a foto não for fornecida
    }, {
      headers: {
        Authorization: `Bearer ${token}`, // Passa o token no header
      },
    });

    return response.data; // Retorna a resposta do backend
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.error || 'Erro ao criar pet');
    }
    throw new Error('Erro na conexão com o servidor');
  }
};


// Função para listar os pets, pegando o token e userId dos cookies
export const listPets = async () => {
  const token = getTokenFromCookies(); // Pegando o token do cookie
  const userId = getUserIdFromCookies(); // Pegando o userId do cookie

  if (!token || !userId) {
    throw new Error('Token ou User ID não encontrado nos cookies');
  }

  try {
    const response = await axiosInstance.get(`/user/${userId}/pets`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.pets;
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error;
  }
};

// Nova função para buscar detalhes do pet
export const getPetDetail = async (petId: string) => {
  const userId = getUserIdFromCookies(); 
  console.log("Userid",userId);
  try {
    const response = await axiosInstance.get(`/pet/${petId}`, {
      headers: {
        Authorization: `Bearer ${userId}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar detalhes do pet:', error);
    throw error;
  }
};

