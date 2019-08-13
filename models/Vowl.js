const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
  cereal: {
    type: ObjectId,
    ref: 'Ingredient',
    required: true
  },
  protein: {
    type: ObjectId,
    ref: 'Ingredient',
    required: true
  },
  tuber: {
    type: ObjectId,
    ref: 'Ingredient',
    required: true
  },
  cruciferous: {
    type: ObjectId,
    ref: 'Ingredient',
    required: true
  },
  greens: {
    type: ObjectId,
    ref: 'Ingredient',
    required: true
  },
  othervegs: {
    type: ObjectId,
    ref: 'Ingredient',
    required: true
  },
  salsa: {
    type: ObjectId,
    ref: 'Ingredient',
    required: true
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
