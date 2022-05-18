import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const UsersSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  createAt: {
    type: Date,
    default: Date.now()
  },
  phoneNumber: {
    type: Number,
    trim: true,
    unique: true
  }
});

UsersSchema.index({ name: 'text' });

export const User = mongoose.models.User || mongoose.model('User', UsersSchema);
