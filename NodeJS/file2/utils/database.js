const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost",
    database: "file1",
    user: "root",
    password: ""
});

module.exports = pool.promise() ;