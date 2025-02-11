import mongoose, { Schema, model, models } from "mongoose";

const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  completed: { type: Boolean, default: false },
}, { timestamps: true });

export default models.Task || model("Task", TaskSchema);
