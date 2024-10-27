import { getCookie } from "./petService"
import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: `http://localhost:${process.env.NEXT_PUBLIC_PORT}`,
});
export const createUserPermission = async (
  email: string,
  petId: string,
  permission: string[],
 ) => {
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

export const listUserPermissionByPet = async (petId: string) => {
  try {
    const token = getCookie('token');

      if (!token) {
        throw new Error('Token não encontrado');
      }

      const response = await axiosInstance.get(`/permission/pet/${petId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('@response', response);
      return response.data;
  } catch (e) {
    throw e;
  }
}
