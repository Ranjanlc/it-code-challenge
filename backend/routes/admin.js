import express from "express";
import { handleAdminLogin } from "../controllers/admin.js";
const router = express.Router();
import { requireAuth } from "../middleware/requireAuth.js";

import { create, update, remove } from "../controllers/admin.js";

router.post("/login", handleAdminLogin);
router.post("/alumni", requireAuth, create);
router.put("/alumni/:alumniId", requireAuth, update);

router.delete("/alumni/:alumniId", requireAuth, remove);

export default router;
