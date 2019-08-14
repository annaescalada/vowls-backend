const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: String,
  age: Number,
  gender: {
    type: String,
    enum: ['male', 'female']
  },
  weight: Number,
  height: Number,
  activity: Number,
  portion: Number,
  IMC: Number,
  GED: Number,
  Vowls: [{
    type: ObjectId,
    ref: 'Vowl'
  }],
  completed: Boolean
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
