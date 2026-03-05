const connectDB = require('../config/database');

class MotoRepository {

  getAll() {
    const db = connectDB();
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM motos', (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

create(moto) {
  const db = connectDB();
  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO motos (marca, modelo, cilindraje) VALUES (?, ?, ?)',
      [moto.marca, moto.modelo, moto.cilindraje],
      (err, result) => {
        if (err) {
          console.log("ERROR:", err);
          reject(err);
        } else {
          console.log("INSERT RESULT:", result);
          resolve(result);
        }
      }
    );
  });
}
}

module.exports = new MotoRepository();