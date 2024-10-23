import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import faqRoutes from "./routes/faq.js";
import alumniRoutes from "./routes/alumni.js";
import adminRoutes from "./routes/admin.js";
import contactRoutes from "./routes/contact.js";
dotenv.config();

const app = express();

//db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB ERROR=>", err));

//middlewares
app.use(cors());
app.use(express.json());

app.use("/", faqRoutes);
app.use("/", alumniRoutes);
app.use("/", contactRoutes);
app.use("/", adminRoutes);
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Node server is running on port ${PORT}`);
});
