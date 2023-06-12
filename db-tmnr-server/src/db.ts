import { Schema, model, Model } from "mongoose";

export interface User {
  name: string;
  age: number;
  department: string;
}

const userSchema = new Schema<User>({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
});

const User = model("User", userSchema) as Model<User, {}, {}, {}, User>;

const db = { User };

export default db;
