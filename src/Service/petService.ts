import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/',
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZjA3YWQyMTZkYjQxY2QwNDFhZDcwNSIsImVtYWlsIjoibHVsdUBnbWFpbC5jb20iLCJpYXQiOjE3MjcwNDM3MjAsImV4cCI6MTcyNzA0NzMyMH0.wtAJ-L8Zu2NFtXdI8SnVy5JHJMQBymaSA9pdA3N6cFc`
    }
})

export const listPets = async (userId: string) => {
    try {
        const response = await axiosInstance.get(`/user/${userId}/pets`);
        return response.data.pets;
    } catch (error) {
        console.log('@Erro na req', error)
        throw error;
    }
}

