//@ts-check
import { Schema, model } from 'mongoose';

const schema = new Schema({
  firstName: { type: String, required: true, max: 100 /* , index: true */ },
  lastName: { type: String, required: true, max: 100, index: true },
  email: { type: String, required: true, max: 100 /* , unique: true */ },
});

export const UserModel = model('users', schema);
