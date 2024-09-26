import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZjVjMmJmNzU3MTAzY2MzMDhmMGI1ZSIsImVtYWlsIjoiYW1hbmRhQGdtYWlsLmNvbSIsImlhdCI6MTcyNzM4NTQ4MiwiZXhwIjoxNzI3Mzg5MDgyfQ.3e_w6298KAfdXWmFWHVltSuDR6pKyBUoBn3ptOVEBFY`
  }
});

export const listPets = async (userId: string) => {
  try {
    const response = await axiosInstance.get(`/user/${userId}/pets`);
    return response.data.pets;
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error;
  }
};

// Nova função para buscar detalhes do pet
export const getPetDetail = async (petId: string, userId: string) => {
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

