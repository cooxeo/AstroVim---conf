import express from "express";
import { getUser, getUsers } from "../controllers/dynamicControllers.js";

const router = express.Router();

router.get("/search", getUser);
router.get("/:username", getUsers);

export default router;
