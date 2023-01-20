const bcrypt = require("bcrypt");

//? Encripta la contraseña del usuario cuando se crea o se modifica la contraseña
const hashPassword = (plainPassword) => {
  return bcrypt.hashSync(plainPassword, 10);
};


//? Comparar si la contraseña "plainPassword" es igual a "$2b$10$QR1CpdOItQAqwKWpPDx2WeV5oDYPS34DTqGJuykaAYQfj2Dgz02my"
const comparePassword = (plainPassword, hashedPassword) => {
  return bcrypt.compareSync(plainPassword, hashedPassword);
};

module.exports = {
  hashPassword,
  comparePassword
};