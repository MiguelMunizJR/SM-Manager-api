const adminValidate = (req, res, next) => {
  const role = req.user.role;

  console.log(role);
  //? Si el rol es "admin" nos da paso a la siguiente funcion.
  if (role === "admin") {
    return next();
  } else {
    res.status(401).json({
      message: "Access Denied!",
    });
  }
};

module.exports = adminValidate;
