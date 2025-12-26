import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../Models/userModel.js";

//@desc Register user
//@route POST api/users
//@access public
export const registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    const error = new Error("You must fill all the fields");
    error.status = 400;
    return next(error);
  }
  //Check user already exist or not
  const registeredUser = await User.findOne({ email });

  if (registeredUser) {
    const error = new Error("User already exists");
    error.status = 400;
    return next(error);
  }
  //hash password
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  //check if user is created or not
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    const error = new Error("Invalid User Data");
    error.status = 400;
    next(error);
  }
};

//@desc Login user
//@route POST api/users/login
//@access public
export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    //Find the user if exists
    const user = await User.findOne({ email });

    //compare thee password
    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(200).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      const error = new Error("Invalid Credentials");
      error.status = 400;
      next(error);
    }
  } catch {
    const error = new Error("Fil all the fields");
    error.status = 500;
    next(error);
  }
};

//@desc access goals
//@route GET api/users/me
//@access private
export const getMe = async (req, res) => {
  const { _id, name, email } = await User.findById(req.user);

  res.status(200).json({
    id: _id,
    name,
    email,
  });
};

//JWT Functionality

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};
