import mongoose from "mongoose";


const { Schema } = mongoose;

const faqSchema = new Schema({
  question: {
    type: String,
    trim: true,
   
  },
  answer: {
    type: String,
    trim: true,
   
  },
}, { timestamps: true });

export default mongoose.model('FAQ', faqSchema);
