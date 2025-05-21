import pool from "../config/db.js";

export const getAllCiudades = async () => {
  const [rows] = await pool.query("SELECT * FROM ciudad");
  return rows;
}
export const getCiudadById = async (id) => {
  const [rows] = await pool.query("SELECT * FROM ciudad WHERE id_ciudad = ?", [id]);
  return rows;
}
export const createCiudad = async ({ id_ciudad, nombre, poblacion, region, id_pais}) => {
  const [result] = await pool.query(
    "INSERT INTO ciudad (id_ciudad, nombre, poblacion, region, id_pais) VALUES (?, ?, ?, ?, ?)",
    [id_ciudad, nombre, poblacion, region, id_pais]
  );
  return result.insertId;
}
export const updateCiudad = async (id, { nombre, poblacion, region, id_pais }) => {
  const [result] = await pool.query(
    "UPDATE ciudad SET nombre = ?, poblacion = ?, region = ?, id_pais = ? WHERE id_ciudad = ?",
    [nombre, poblacion, region, id_pais, id]
  );
  return result.affectedRows;
}
export const deleteCiudad = async (id) => {
  const [result] = await pool.query("DELETE FROM ciudad WHERE id_ciudad = ?", [id]);
  return result.affectedRows;
}

export const getCiudadesByIdPais = async (id_pais) => {
  const [rows] = await pool.query("SELECT * FROM ciudad WHERE id_pais = ?", [id_pais]);
  return rows;
}
