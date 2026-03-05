const mysql = require('mysql2');

let connection;

function connectDB() {
  if (!connection) {
    connection = mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'motosmart'
    });

    connection.connect(err => {
      if (err) throw err;
      console.log('Base de datos conectada');
    });
  }

  return connection;
}

module.exports = connectDB;