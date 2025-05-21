import axios from "axios";


const API = 'http://localhost:3000/autores'; 

export const createAutorRequest = async(autor)=> {
   await axios.post(API, autor)
}

export const getAllAutoresRequest = () => axios.get(API);
export const getAutorByIdRequest = (id) => axios.get(`${API}/${id}`);
export const updateAutorRequest = (id, autor) => axios.put(`${API}/${id}`, autor);
export const deleteAutorRequest = (id) => axios.delete(`${API}/${id}`);