const userService = require("../services/userService");
const authService = require("../services/authService");

const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  const { name, email, phone, password } = req.body;
  try {
    const email1 = email.toLowerCase();
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = {
      name: name,
      email: email1,
      phone: phone,
      password: hashedPassword,
      // role: role,
    };
    userService.createUser(newUser);
    return res.send({
      response: `User Created Sucessfully${JSON.stringify(newUser)}`,
      status: 200,
    });
  } catch (error) {
    console.log(error, "error in controller");
  }
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const email1 = email.toLowerCase();
    const resp = await userService.userByMail(email1);
    if (res.error) return res.status(500).send("Error in Login User");
    const resp2 = await authService.passwordVerification(
      password,
      resp.user.password
    );
    if (resp2.error) return res.status(500).send("Password is not Valid");
    const code = Math.floor(Math.random() * (999 - 100 + 1)) + 999;
    F;
    const resp3 = await authService.signInToken(resp.user.email, code);
    console.log(resp3, "resp3 is here");

    // const unHasedPass = password;
    // const newUser = {
    //   email: email1,
    //   password: unHasedPass,
    // };
    // res.send({ message: `User Login Successfully${response}`, code: 200 });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { registerUser, signIn };
