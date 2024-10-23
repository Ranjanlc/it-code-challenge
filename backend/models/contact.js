import mongoose from "mongoose";

const { Schema } = mongoose;

const contactSchema = new Schema(
  {
    firstName: {
      type: String,
      required: false,
      trim: true,
    },
    emailAddress: {
      type: String,
      required: false,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: false,
      trim: true,
    },
    contactMethod: {
      type: String,
      enum: ["SMS", "Email", "Other"],
      default: "Email",
    },
    message: {
      type: String,
      required: false,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);
