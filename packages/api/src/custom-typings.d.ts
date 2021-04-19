import { Document as MongooseDocument } from 'mongoose';

declare module 'mongoose' {
  interface Document extends MongooseDocument {
    createdAt: Date;
    updatedAt: Date;
  }
}
