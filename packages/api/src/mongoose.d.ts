declare module 'mongoose' {
  export interface IDocument extends Document {
    createdAt: Date;
    updatedAt: Date;
  }
}
