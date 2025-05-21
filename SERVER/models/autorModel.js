import pool from "../config/db.js";

export const getAllAuthors = async () => {
  const [rows] = await pool.query("SELECT * FROM autor");
  return rows;
}
export const getAuthorById = async (id) => {
  const [rows] = await pool.query("SELECT * FROM autor WHERE id_autor = ?", [id]);
  return rows[0];
}
export const createAuthor = async ({ id_autor, nombre, nacionalidad, fecha_nacimiento, biografia }) => {
  const [result] = await pool.query(
    "INSERT INTO autor (id_autor, nombre, nacionalidad, fecha_nacimiento, biografia) VALUES (?, ?, ?, ?, ?)",
    [id_autor, nombre, nacionalidad, fecha_nacimiento, biografia]
  );
  return result.insertId;
}
export const updateAuthor = async (id, { nombre, nacionalidad, fecha_nacimiento, biografia }) => {
  const [result] = await pool.query(
    "UPDATE autor SET nombre = ?, nacionalidad = ?, fecha_nacimiento = ?, biografia = ? WHERE id_autor = ?",
    [nombre, nacionalidad, fecha_nacimiento, biografia, id]
  );
  return result.affectedRows;
}
export const deleteAuthor = async (id) => {
  const [result] = await pool.query("DELETE FROM autor WHERE id_autor = ?", [id]);
  return result.affectedRows;
}
