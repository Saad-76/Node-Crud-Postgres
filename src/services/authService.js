const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const passwordVerification = async (password, userPassword) => {
  try {
    const validPassword = await bcrypt.compare(password, userPassword);
    if (!validPassword)
      return { error: { message: "Invalid password" }, code: 401 };
    return { validPassword: validPassword };
  } catch (error) {
    return { error: { message: "Invalid password" }, code: 500 };
  }
};

const signInToken = async (email, code) => {
  try {
    console.log(email, code, "user code here");
    console.log("sign in token is here");
  } catch (error) {
    return { error: { message: "Error creating token" }, code: 500 };
  }
};

module.exports = {
  passwordVerification,
  signInToken,
};
