import Goal from "../Models/goalModel.js";
import User from "../Models/userModel.js";
//@desc GET goals
//@route GET api/goals
//@access private
export const getGoals = async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  res.status(200).json(goals);
};

//@desc SET goals
//@route POST api/goals
//@access private
export const setGoals = async (req, res, next) => {
  if (!req.body.text) {
    const error = new Error("please give a text ");
    error.status = 400;
    next(error);
  } else {
    const goal = await Goal.create({
      user: req.user.id,
      text: req.body.text,
    });
    res.status(201).json(goal);
  }
};

//@desc UPDATE goals
//@route PUT api/goals/:id
//@access private
export const updateGoals = async (req, res, next) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    const error = new Error("Goal not found");
    error.status = 404;
    next(error);
  } else {
    //Find the user
    const user = await User.findById(req.user.id);
    //check if the user exists or not
    if (!user) {
      const error = new Error("User not found");
      error.status = 401;
      return next(error);
    }
    // check if the goal ID and user Id mathches otherwise anyone can change others goals
    if (goal.user.toString() !== user.id) {
      const error = new Error("User not authorized");
      error.status = 401;
      return next(error);
    }

    const updateGoal = await Goal.findByIdAndUpdate(
      req.params.id,
      {
        text: req.body.text,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updateGoal);
  }
};

//@desc DELETE goals
//@route DELETE api/goals/:id
//@access private
export const deleteGoals = async (req, res, next) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    const error = new Error(`User with ${req.params.id} not found`);
    error.status = 404;
    next(error);
  } else {
    const user = await User.findById(req.user.id);

    if (!user) {
      const error = new Error("User not found");
      error.status = 401;
      return next(error);
    }

    if (goal.user.toString() !== user.id) {
      const error = new Error("User not authorized");
      error.status = 401;
      return next(error);
    }
    const deleteGoal = await Goal.findByIdAndDelete(req.params.id);

    res.status(200).json({ deleteGoal, message: "Post deleted Successfully" });
  }
};
