import mongoose from "mongoose";

const { Schema } = mongoose;

const alumniSchema = new Schema(
  {
    logo: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    job_title: {
      type: String,
      required: true,
      trim: true,
    },
    name_of_business: {
      type: String,
    },
    business_description: {
      type: String,
      required: false,
    },
    business_category: {
      type: String,
      required: false,
    },
    business_zip: {
      type: String,
      required: false,
    },
    business_city: {
      type: String,
      required: false,
    },
    business_state: {
      type: String,
      required: false,
    },
    business_address: {
      type: String,
      required: false,
    },
    business_phone: {
      type: String,
      required: false,
    },
    business_email: {
      type: String,
      required: false,
    },
    business_website: {
      type: String,
      required: false,
    },
    alumni_discount: {
      type: String,
      required: false,
      default: false,
    },
    alumni_discount_description: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Alumni", alumniSchema);
