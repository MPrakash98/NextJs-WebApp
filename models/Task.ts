import mongoose, { Schema, model, models } from "mongoose";

const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  status: { type: String,required: true },
}, { timestamps: true });

export default models.Task || model("Task", TaskSchema);
