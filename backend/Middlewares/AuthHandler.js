import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../Models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Getting the token
      token = req.headers.authorization.split(" ")[1];

      // Verify token (not just decode!)
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token (with await!)
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      const err = new Error("Not authorized, token failed");
      err.status = 401;
      next(err);
    }
  } else {
    const error = new Error("Not Authorized", "No token");
    error.status = 401;
    next(error);
  }
});

export { protect };
