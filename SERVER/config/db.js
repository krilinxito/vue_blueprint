import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  port : 3306,
  user: 'root',
  database: 'paises_db',
});

export default pool;
