declare module 'mongoose' {
  export interface Document {
    _id?: any;
    id?: any;
  }
  
  export interface Types {
    ObjectId: any;
  }
  
  export interface Schema {
    Types: {
      ObjectId: any;
    };
  }
  
  export interface Model<T extends Document> {
    new (doc?: any): T;
    findById(id: any): Promise<T | null>;
    findOne(conditions?: any): Promise<T | null>;
    find(conditions?: any): Promise<T[]>;
    create(doc: any): Promise<T>;
    findByIdAndUpdate(id: any, update: any, options?: any): Promise<T | null>;
    findByIdAndDelete(id: any): Promise<T | null>;
  }
  
  export function model<T extends Document>(name: string, schema: any): Model<T>;
  export const Schema: {
    new (definition: any, options?: any): any;
    Types: {
      ObjectId: any;
    };
  };
  
  export function connect(uri: string, options?: any): Promise<any>;
}
