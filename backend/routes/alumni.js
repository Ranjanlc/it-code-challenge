import express from "express";
const router = express.Router();
import { list } from "../controllers/alumni.js";
router.get("/alumni", list);

export default router;
