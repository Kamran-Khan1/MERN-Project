import mongoose, { Schema, model } from "mongoose";

const goalSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    text: {
      type: String,
      required: [true, "Please put a text value"],
    },
  },
  {
    timestamps: true,
  }
);

const Goal = model("Goal", goalSchema);

export default Goal;
