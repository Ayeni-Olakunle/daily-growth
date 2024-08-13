const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncNow = require("express-async-handler");
const signupModel = require("../../models/auth/signup");

const getUser = asyncNow(async (req, res) => {
  const user = await signupModel.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("Not Found");
  }

  res.status(200).json(user);

  //   if (user) {
  //     res.status(200).json(user);
  //   } else {
  //     res.status(400);
  //     throw new Error("user doesn't exist");
  //   }
});

const signupUser = asyncNow(async (req, res) => {
  const { firstName, lastName, email, phoneNumber, password } = req.body;
  const userExist = await signupModel.findOne({ email });

  if (!firstName && !lastName && !email && !phoneNumber && !password) {
    res.status(400);
    throw new Error("Fill all required field");
  }

  if (userExist) {
    res.status(400);
    throw new Error("User already exist");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await signupModel.create({
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json(user);
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const userLogin = asyncNow(async (req, res) => {
  const { email, password } = req.body;
  const user = await signupModel.findOne({ email });

  if (email && (await bcrypt.compare(password, user.password))) {
    res.status(200).json(user);
  } else {
    res.status(400);
    throw new Error("user does not exist");
  }
});

const editUser = asyncNow(async (req, res) => {
  const { firstName, lastName, email, phoneNumber, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await signupModel.findById(req.params.id);

  if (user) {
    const updateUser = await signupModel.findByIdAndUpdate(
      req.params.id,
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        password: hashedPassword,
      },
      { new: true }
    );

    res.status(200).json(updateUser);
  } else {
    res.status(400);
    throw new Error("user does not exist");
  }
});

module.exports = {
  getUser,
  signupUser,
  userLogin,
  editUser,
};
