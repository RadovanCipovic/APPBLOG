import mysql from "mysql2/promise";

export let db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "DBblog123",
  database: "blogapp",
});
