import Partner from "../models/alumni.js";
import jwt from "jsonwebtoken";
const createToken = (email) => {
  return jwt.sign({ email }, process.env.SECRET, {
    expiresIn: "1y",
  });
};
export const handleAdminLogin = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  console.log(email, password);
  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PW) {
    const token = createToken(email);
    return res.status(200).json({ token });
  } else {
    return res.status(401).json("Not authorized");
  }
};
export const create = async (req, res) => {
  try {
    //console.log("helloWorld")
    const {
      name,
      email,
      business_address,
      job_title,
      name_of_business,
      business_city,
      business_state,
      business_zip,
      business_phone,
      business_website,
      business_email,
      business_description,
      business_category,
      alumni_discount_description,
      alumni_discount,
    } = req.body;

    if (!name || !email || !job_title) {
      throw new Error("Personal information is required");
    }

    const randomNum = Math.trunc(Math.random() * 1000);

    // Create a new Partner document
    const newPartner = new Partner({
      name,
      email,
      business_address,
      job_title,
      name_of_business,
      business_city,
      business_state,
      business_zip,
      business_phone,
      business_website,
      business_email,
      business_description,
      business_category,
      alumni_discount_description,
      alumni_discount,
      logo: `https://picsum.photos/id/${randomNum}/400/300`,
    });

    // Save the new Partner document to the database
    const savedPartner = await newPartner.save();

    res.status(201).json(savedPartner);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Failed to create partner", message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { alumniId } = req.params;
    const {
      name,
      email,
      business_address,
      job_title,
      name_of_business,
      business_city,
      business_state,
      business_zip,
      business_phone,
      business_website,
      business_email,
      business_description,
      business_category,
      alumni_discount_description,
      alumni_discount,
    } = req.body;

    if (!name || !email || !job_title) {
      throw new Error("Personal information is required");
    }
    // Find the partner by ID and update its fields
    const updatedPartner = await Partner.findByIdAndUpdate(
      alumniId,
      {
        name,
        email,
        business_address,
        job_title,
        name_of_business,
        business_city,
        business_state,
        business_zip,
        business_phone,
        business_website,
        business_email,
        business_description,
        business_category,
        alumni_discount_description,
        alumni_discount,
      },
      { new: true }
    );

    res.json(updatedPartner);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Failed to update partner", message: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const { alumniId } = req.params;

    await Partner.findByIdAndDelete(alumniId);
    res.json({ message: "Partner deleted successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Failed to delete partner", message: error.message });
  }
};
