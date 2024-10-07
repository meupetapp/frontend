import { axiosInstance, getCookie } from "./petService"

export const createUserPermission = async (
  email: string,
  permission: string[],
  petId: string) => {
  
    try {
      const token = getCookie('token');

      if (!token) {
        throw new Error('Token não encontrado');
      }

      const response = await axiosInstance.post('/permission', {
        userEmail: email,
        permission,
        petId
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      throw error;
    }
} 