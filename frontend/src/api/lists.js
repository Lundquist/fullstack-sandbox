import axios from "./axiosConfig";
const baseURL = 'lists'
export const getLists = async () => {
    return axios.get(`${baseURL}`)
        .then((response) => response.data)
        .catch(e => console.error(e))
}

export const getList = async (id) => {
    return axios.get(`${baseURL}/${id}`)
        .then((response) => response.data)
        .catch(e => console.error(e))
}

export const updateToDos = async (list, todos) => {
    return axios.put(`${baseURL}/${list}`, { todos })
        .then((response) => response.data)
        .catch(e => console.error(e))
}

