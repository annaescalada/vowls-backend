import { Schema, model } from 'mongoose';
import { IVowl } from '../types';

const ObjectId = Schema.Types.ObjectId;

const vowlSchema = new Schema({
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

const Vowl = model<IVowl>('Vowl', vowlSchema);

export default Vowl;
