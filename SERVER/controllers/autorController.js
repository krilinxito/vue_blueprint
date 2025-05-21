import *as autorModel from  "../models/autorModel.js";

export const getAllAutores = async (req, res) => {
  try {
    const autores = await autorModel.getAllAuthors();
    res.status(200).json(autores);
  } catch (error) {
    console.error("Error fetching authors:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getAutorById = async (req, res) => {
  try {
    const { id } = req.params;
    const autor = await autorModel.getAuthorById(id);
    if (!autor) {
      return res.status(404).json({ error: "Author not found" });
    }
    res.status(200).json(autor);
  } catch (error) {
    console.error("Error fetching author:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const createAutor = async (req, res) => {
  try {
    const { id_autor, nombre, nacionalidad, fecha_nacimiento, biografia } = req.body;
    const newAutorId = await autorModel.createAuthor({ id_autor, nombre, nacionalidad, fecha_nacimiento, biografia });
    res.status(201).json({ id_autor: newAutorId });
  } catch (error) {
    console.error("Error creating author:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const updateAutor = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, nacionalidad, fecha_nacimiento, biografia } = req.body;
    const updatedRows = await autorModel.updateAuthor(id, { nombre, nacionalidad, fecha_nacimiento, biografia });
    if (updatedRows === 0) {
      return res.status(404).json({ error: "Author not found" });
    }
    res.status(200).json({ message: "Author updated successfully" });
  } catch (error) {
    console.error("Error updating author:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const deleteAutor = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRows = await autorModel.deleteAuthor(id);
    if (deletedRows === 0) {
      return res.status(404).json({ error: "Author not found" });
    }
    res.status(200).json({ message: "Author deleted successfully" });
  } catch (error) {
    console.error("Error deleting author:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}; 
