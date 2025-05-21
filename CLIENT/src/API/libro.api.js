
import axios from 'axios'

export const getLibroByIdAutorRequest = (id_autor) => {
  return axios.get(`http://localhost:3000/libros/${id_autor}`)
}
