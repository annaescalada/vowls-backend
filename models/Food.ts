import { Schema, model } from 'mongoose';
import { IFood } from '../types';

const foodSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  img: {
    type: String
  },
  group: {
    type: String,
    enum: ['fruit', 'berries', 'proteins', 'cereals', 'tubers', 'cruciferous', 'greens', 'othervegs', 'omega', 'fat', 'dairy', 'salsa'],
    required: true
  },
  portion: {
    type: Number,
    required: true
  },
  categories: {
    type: []
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Food = model<IFood>('Food', foodSchema);

export default Food;
