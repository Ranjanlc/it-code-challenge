import FAQ from "../models/faq.js";

export const create = async (req, res) => {
  try {
    const { question, answer } = req.body;

    // Create a new FAQ document
    const newFAQ = new FAQ({
      question,
      answer,
    });

    // Save the new FAQ document to the database
    const savedFAQ = await newFAQ.save();

    res.status(201).json(savedFAQ);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create FAQ" });
  }
};

export const update = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const { faqId } = req.params;

    // Find the FAQ by ID and update its fields
    const updatedFAQ = await FAQ.findByIdAndUpdate(
      faqId,
      {
        question,
        answer,
      },
      { new: true }
    );

    res.json(updatedFAQ);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to update FAQ" });
  }
};

export const remove = async (req, res) => {
  try {
    const { faqId } = req.params;

    // Find the FAQ by ID and remove it
    await FAQ.findByIdAndDelete(faqId);

    res.json({ message: "FAQ deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to delete FAQ" });
  }
};

export const list = async (req, res) => {
  try {
    // Retrieve all FAQs from the database
    const faqs = await FAQ.find();

    res.json(faqs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to get FAQs" });
  }
};




export const search = async (req, res) => {
  try {
    const { key } = req.params;

    const faqs = await FAQ.find({
      $or: [
        { question: { $regex: req.params.key ,$options:'i' } },
      ],
    });

    res.json(faqs);
  } catch (error) {
    console.log(error);
    res.json({ error: "Failed to get faq" });
  }
};
