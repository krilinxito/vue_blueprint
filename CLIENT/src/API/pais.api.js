import axios from "axios";


const API = 'http://localhost:3000/paises'; 

export const createPaisRequest = async(autor)=> {
   await axios.post(API, autor)
}

export const getAllPaisesRequest = () => axios.get(API);
export const getPaisByIdRequest = (id) => axios.get(`${API}/${id}`);
export const updatePaisRequest = (id, autor) => axios.put(`${API}/${id}`, autor);
export const deletePaisRequest = (id) => axios.delete(`${API}/${id}`);

