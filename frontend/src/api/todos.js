import axios from "./axiosConfig";
const baseURL = 'todos'
export const addTodo = async (list) => {
    return axios.post(`${baseURL}`, { list })
        .then((response) => response.data)
        .catch(e => console.error(e))
}

export const updateTodo = async (todo) => {
    return axios.put(`${baseURL}/${todo.id}`, todo )
        .then((response) => response.data)
        .catch(e => console.error(e))
}

export const deleteTodo = async (id) => {
    return axios.delete(`${baseURL}/${id}`)
        .then((response) => response.data)
        .catch(e => console.error(e))
}