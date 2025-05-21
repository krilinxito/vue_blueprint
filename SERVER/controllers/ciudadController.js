import *as CiudadModel from  "../models/ciudadModel.js";

export const getAllCiudades = async (req, res) => {
  try {
    const ciudades = await CiudadModel.getAllCiudades();
    res.status(200).json(ciudades);
  } catch (error) {
    console.error("Error fetching ciudades:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getCiudadById = async (req, res) => {
  try {
    const { id } = req.params;
    const ciudad = await CiudadModel.getCiudadById(id);
    if (!ciudad) {
      return res.status(404).json({ error: "Ciudad not found" });
    }
    res.status(200).json(ciudad);
  } catch (error) {
    console.error("Error fetching ciudad:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const createCiudad = async (req, res) => {
  try {
    const { id_ciudad, nombre, poblacion, region, id_pais } = req.body;
    const newCiudadId = await CiudadModel.createCiudad({ id_ciudad, nombre, poblacion, region, id_pais });
    res.status(201).json({ id_ciudad: newCiudadId, nombre, poblacion, region, id_pais });
  } catch (error) {
    console.error("Error creating ciudad:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const updateCiudad = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, poblacion, region, id_pais } = req.body;
    const updatedRows = await CiudadModel.updateCiudad(id, { nombre, poblacion, region, id_pais });
    if (updatedRows === 0) {
      return res.status(404).json({ error: "Ciudad not found" });
    }
    res.status(200).json({ message: "Ciudad updated successfully" });
  } catch (error) {
    console.error("Error updating ciudad:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const deleteCiudad = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRows = await CiudadModel.deleteCiudad(id);
    if (deletedRows === 0) {
      return res.status(404).json({ error: "Ciudad not found" });
    }
    res.status(200).json({ message: "Ciudad deleted successfully" });
  } catch (error) {
    console.error("Error deleting ciudad:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}; 

export const getCiudadesByIdPais = async (req, res) => {
  try {
    const { id_pais } = req.params;
    const ciudades = await CiudadModel.getCiudadesByIdPais(id_pais);
    if (!ciudades) {
      return res.status(404).json({ error: "No ciudades found for this pais" });
    }
    res.status(200).json(ciudades);
  } catch (error) {
    console.error("Error fetching ciudades by pais:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};