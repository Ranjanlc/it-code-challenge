import express from "express";

const router = express.Router();

//controllers
import { create, update, remove, list, search } from "../controllers/faq.js";

router.post("/faq", create);
router.put("/faq/:faqId", update);
router.delete("/faq", remove);
router.get("/faqs", list);
router.get("/faqs/:key", search);


export default router;
