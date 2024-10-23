import Alumni from "../models/alumni.js";

export const list = async (req, res) => {
  try {
    // Retrieve all alumni from the database
    const alumni = await Alumni.find().sort({ createdAt: -1 });
    console.log(alumni);
    res.json(alumni);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to get alumni" });
  }
};
