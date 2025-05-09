import { Document, Model, model, Schema, Types } from 'mongoose';

import type { SerialisedExistingUser, SerialisedNewUser } from '../../types/serialised-users.js';

export interface UserDocument extends Document {
  _id: Types.ObjectId;
  username: string;
  email: string;
  passwordHash: string;
  createdDateTime: Date;
  updatedDateTime: Date;
}

export interface UserMethods {
  serialiseNewUser(): SerialisedNewUser;
  serialiseExistingUser(): SerialisedExistingUser;
}

type UserModel = Model<UserDocument, object, UserMethods>;

const userSchema: Schema = new Schema<UserDocument, UserModel, UserMethods>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
  },
  {
    timestamps: { createdAt: 'createdDateTime', updatedAt: 'updatedDateTime' },
  },
);

userSchema.method('serialiseNewUser', function serialise(this: UserDocument): SerialisedNewUser {
  return {
    username: this.username,
    email: this.email,
    createdDateTime: this.createdDateTime,
  };
});
userSchema.method('serialiseExistingUser', function serialise(this: UserDocument): SerialisedExistingUser {
  return {
    username: this.username,
    email: this.email,
    createdDateTime: this.createdDateTime,
    updatedDateTime: this.updatedDateTime,
  };
});

export const User = model<UserDocument, UserModel>('User', userSchema);
