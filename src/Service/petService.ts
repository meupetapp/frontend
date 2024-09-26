import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZjA3YWQyMTZkYjQxY2QwNDFhZDcwNSIsImVtYWlsIjoibHVsdUBnbWFpbC5jb20iLCJpYXQiOjE3MjczODI2OTUsImV4cCI6MTcyNzM4NjI5NX0.6GI3gwj8GvjphIx57ELfUqZ6vhVCMI2cgoY7x8brEQ0`
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
