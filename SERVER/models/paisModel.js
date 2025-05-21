import pool from "../config/db.js";

export const getAllAPaises = async () => {
  const [rows] = await pool.query("SELECT * FROM pais");
  return rows;
}
export const getPaisById = async (id) => {
  const [rows] = await pool.query("SELECT * FROM  WHERE id_pais = ?", [id]);
  return rows;
}
export const createPais = async ({ id_pais, nombre, capital, continente}) => {
  const [result] = await pool.query(
    "INSERT INTO pais (id_pais, nombre, capital, continente) VALUES (?, ?, ?, ?)",
    [id_pais, nombre, capital, continente]
  );
  return result.insertId;
}
export const updatePais = async (id, { nombre, capital, continente }) => {
  const [result] = await pool.query(
    "UPDATE pais SET nombre = ?, capital = ?, continente = ? WHERE id_pais = ?",
    [nombre, capital, continente, id]
  );
  return result.affectedRows;
}
export const deletePais = async (id) => {
  const [result] = await pool.query("DELETE FROM pais WHERE id_pais = ?", [id]);
  return result.affectedRows;
}
