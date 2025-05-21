import axios from "axios";


const API = 'http://localhost:3000/ciudades'; 

export const createCiudadRequest = async(autor)=> {
   await axios.post(API, autor)
}

export const getAllCiudadesRequest = () => axios.get(API);
export const getCiudadByIdRequest = (id) => axios.get(`${API}/${id}`);
export const updateCiudadRequest = (id, autor) => axios.put(`${API}/${id}`, autor);
export const deleteCiudadRequest = (id) => axios.delete(`${API}/${id}`);

