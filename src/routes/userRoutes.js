import express from "express";
import {
  getUsers,
  createUser,
  updateUser,
  addUser,
  deleteUser,
} from "../controllers/userControllers.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.post("/user", addUser);
router.delete("/", deleteUser);

export default router;
