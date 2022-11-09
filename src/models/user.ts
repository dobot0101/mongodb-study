import { model, Schema } from 'mongoose'
import { IUser } from '../interfaces/IUser'

const userSchema = new Schema<IUser>({
  email: { type: String, unique: true },
  name: { type: String },
  password: { type: String },
  createdAt: { type: Date, default: Date.now },
})

export const User = model<IUser>('User', userSchema)
