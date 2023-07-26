import { Schema, model, Model } from "mongoose";

export interface Member {
  _id: string;
  name: string;
  age: number;
  department: string;
}

const memberSchema = new Schema<Member>({
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

const Member = model("Member", memberSchema) as Model<
  Member,
  {},
  {},
  {},
  Member
>;

const db = { Member };

export default db;
