import pool from "../config/db.js";

export const getBookById = async (id) => {
  const [rows] = await pool.query("SELECT * FROM libro WHERE id_autor = ?", [id]);
  return rows;
}