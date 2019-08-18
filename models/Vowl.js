const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  cereal: {
    type: ObjectId,
    ref: 'Food',
    required: true
  },
  protein: {
    type: ObjectId,
    ref: 'Food',
    required: true
  },
  tuber: {
    type: ObjectId,
    ref: 'Food',
    required: true
  },
  cruciferous: {
    type: ObjectId,
    ref: 'Food',
    required: true
  },
  greens: {
    type: ObjectId,
    ref: 'Food',
    required: true
  },
  othervegs: {
    type: ObjectId,
    ref: 'Food',
    required: true
  },
  salsa: {
    type: ObjectId,
    ref: 'Food',
    required: true
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Vowl = mongoose.model('Vowl', userSchema);

module.exports = Vowl;
