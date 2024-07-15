import mongoose, { Schema } from 'mongoose';


export interface ResponseStructure {
  code: string,
  rate: number,
  volume: number,
  cap: number,
}

export interface Delta {
  hour: number,
  day: number,
  week: number,
  month: number,
  quarter: number,
  year: number
}

const PostSchema = new Schema({
  code: String,
  rate: Number,
  volume: Number,
  cap: Number,
}, {
  timestamps : true
});

const Stock = mongoose?.models?.Stock || mongoose.model("Stock", PostSchema);

export default Stock;
