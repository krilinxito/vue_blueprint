import *as libroModel from '../models/libroModel.js';

export const getLibroById = async (req, res) => {
  const { id } = req.params;
  try {
    const libro = await libroModel.getBookById(id);
    if (!libro) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }
    res.json(libro);
  } catch (error) {
    console.error('Error al obtener libro:', error);
    res.status(500).json({ message: 'Error al obtener libro' });
  }
}