import axios from "axios"
import { getCookie } from "./petService";

const axiosInstance = axios.create({
  baseURL: `http://localhost:${process.env.NEXT_PUBLIC_PORT}`,
})

export const getNotification = async () => {
  const token = getCookie("token");

  const response = await axiosInstance.get(`/notification`, { headers: { Authorization: `Bearer ${token}` } });
  return response.data
}
