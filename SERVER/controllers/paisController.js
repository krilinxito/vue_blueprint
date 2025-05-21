import *as PaisModel from  "../models/paisModel.js";

export const getAllPaises = async (req, res) => {
  try {
    const paises = await PaisModel.getAllAPaises();
    res.status(200).json(paises);
  } catch (error) {
    console.error("Error fetching paises:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getPaisById = async (req, res) => {
  try {
    const { id } = req.params;
    const pais = await PaisModel.getPaisById(id);
    if (!pais) {
      return res.status(404).json({ error: "Pais not found" });
    }
    res.status(200).json(pais);
  } catch (error) {
    console.error("Error fetching pais:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const createPais = async (req, res) => {
  try {
    const { id_pais, nombre, capital, continente } = req.body;
    const newPaisId = await PaisModel.createPais({ id_pais, nombre, capital, continente });
    res.status(201).json({ id_pais: newPaisId, nombre, capital, continente });
  } catch (error) {
    console.error("Error creating pais:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const updatePais = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, capital, continente } = req.body;
    const updatedRows = await PaisModel.updatePais(id, { nombre, capital, continente });
    if (updatedRows === 0) {
      return res.status(404).json({ error: "Pais not found" });
    }
    res.status(200).json({ message: "Pais updated successfully" });
  } catch (error) {
    console.error("Error updating pais:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const deletePais = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRows = await PaisModel.deletePais(id);
    if (deletedRows === 0) {
      return res.status(404).json({ error: "Pais not found" });
    }
    res.status(200).json({ message: "Pais deleted successfully" });
  } catch (error) {
    console.error("Error deleting pais:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}; 
