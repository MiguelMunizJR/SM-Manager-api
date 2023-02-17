//* Email y contraseña del usuario
//? El email es unico en mi base de datos

const { getUserByEmail } = require("../users/users.controllers");
const { comparePassword } = require("../utils/cryptoPass");

const loginUser = async (email, password) => {
  try {
    const user = await getUserByEmail(email);
    //? 'user.password' contiene la contraseña encriptada de mi base de datos.
    const verifyPass = comparePassword(password, user.password);
    if (verifyPass) {
      return user;
    }
    return false;
  } catch (err) {
    return false;
  }
};

// console.log(loginUser("miguel@academlo.com", "miguel123"));

module.exports = {
  loginUser,
};