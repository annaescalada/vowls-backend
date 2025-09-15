import { Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;
  name?: string;
  age?: number;
  gender?: 'male' | 'female';
  weight?: number;
  height?: number;
  activity?: number;
  portion?: number;
  IMC?: number;
  GED?: number;
  vowls: any[];
  lastGeneratedVowl?: any;
  meals: any[];
  completed?: boolean;
  created_at?: Date;
  updated_at?: Date;
}

export interface IFood extends Document {
  name: string;
  img?: string;
  group: 'fruit' | 'berries' | 'proteins' | 'cereals' | 'tubers' | 'cruciferous' | 'greens' | 'othervegs' | 'omega' | 'fat' | 'dairy' | 'salsa';
  portion: number;
  categories: any[];
  created_at?: Date;
  updated_at?: Date;
}

export interface IVowl extends Document {
  name: string;
  description: string;
  cereal: any;
  protein: any;
  tuber: any;
  cruciferous: any;
  greens: any;
  othervegs: any;
  salsa: any;
  created_at?: Date;
  updated_at?: Date;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface SignupRequest {
  username: string;
  password: string;
}

export interface UpdateUserRequest {
  name?: string;
  age?: number;
  gender?: 'male' | 'female';
  weight?: number;
  height?: number;
  activity?: number;
  portion?: number;
}
