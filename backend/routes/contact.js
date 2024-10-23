// Import required modules and models
import express from "express";
import { sendEmail } from "../controllers/contact.js";

// Create a new router instance
const router = express.Router();

// Handle POST request for submitting the contact form
router.post("/contact", sendEmail);

// Export the router
export default router;
