const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncNow = require("express-async-handler");
const signupModel = require("../../models/auth/signup");

const getUser = asyncNow(async (req, res) => {
  const { _id, firstName, lastName, email, phoneNumber } =
    await signupModel.findById(req.user.id);

  // if (user) {
  //   res.status(404);
  //   throw new Error("Not Found");
  // }

  res.status(200).json({
    user: req.user.id,
    _id,
    firstName,
    lastName,
    email,
    phoneNumber,
    toke: generateToken(_id),
  });

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
    res.status(201).json({
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: phoneNumber,
      toke: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const userLogin = asyncNow(async (req, res) => {
  try {
    const { email, password } = req.body;
  const user = await signupModel.findOne({ email });

  if (email && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      toke: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("user does not exist");
  }
    
  } catch (error) {
    res.status(400);
    throw new Error(`Opps something went wrong ${error}`);
  }
});

const editUser = asyncNow(async (req, res) => {
  try {
    const user = await signupModel.findById(req.params.id);
    const { firstName, lastName, email, phoneNumber, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);

    if (user) {
      const updateUser = await signupModel.findByIdAndUpdate(
        req.user.id,
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          phoneNumber: phoneNumber,
          password: password,
          // password: hashedPassword,
        },
        { new: true }
      );

      res.status(200).json({
        firstName: updateUser.firstName,
        lastName: updateUser.lastName,
        email: updateUser.email,
        phoneNumber: phoneNumber,
        toke: generateToken(updateUser._id),
      });

      // res.status(200).json({ massge: "user exist" });
    } else {
      res.status(404).json({ massge: "user does not exist" });
    }
  } catch (error) {
    res.status(500).json({ massge: "something went wrong" });
  }
});

const generateToken = (id) => {
  return jsonwebtoken.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

module.exports = {
  getUser,
  signupUser,
  userLogin,
  editUser,
};
