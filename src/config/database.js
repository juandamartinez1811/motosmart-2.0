const mysql = require('mysql2');

let connection;

function connectDB() {
  if (!connection) {
    connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'motosmart'
    });

    connection.connect(err => {
      if (err) throw err;
      console.log('Base de datos conectada');
    });
  }

  return connection;
}

module.exports = connectDB;