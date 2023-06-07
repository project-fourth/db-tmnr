import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: String,
  age: Number,
  department: String,
});

const User = model("User", userSchema);

const db = { User };

export default db;
