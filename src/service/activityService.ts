import axios from "axios";
import { getCookie } from "./petService";

export interface CreateActivityDTO {
  title?: string;
  type?: string;
  description?: string;
  photo?: string;
  userId?: string;
  petId?: string;
  time?: Date;
}

const axiosInstance = axios.create({
  baseURL: `http://localhost:${process.env.NEXT_PUBLIC_PORT}`,
});

export const createActivity = async (activity: CreateActivityDTO) => {
  const token = getCookie('token');
  const created = await axiosInstance.post(`/activity`, activity, { headers: { Authorization: `Bearer ${token}` } });
  return created.data;
}
