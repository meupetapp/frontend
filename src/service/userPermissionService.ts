import axios from "axios";
import { getCookie } from "./petService";
const axiosInstance = axios.create({
  baseURL: `http://localhost:${process.env.NEXT_PUBLIC_PORT}`,
})

export const createUserPermission = async (
  email: string,
  petId: string,
  permissions: string[],
  ) => {
  console.log(permissions);
    try {
      const token = getCookie('token');

      if (!token) {
        throw new Error('Token não encontrado');
      }

      const response = await axiosInstance.post('/permission', {
        userEmail: email,
        permissions, // Este é o array de permissões
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