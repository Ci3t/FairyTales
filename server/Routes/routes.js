import { Router } from "express";
import { Tale } from "../models/tale.js";
const router = new Router();
router.post("/tale", async (req, res) => {
  try {
    const { body } = req;
    const newCreatedTale = await Tale.create(body);
    res.status(201).json(newCreatedTale);
  } catch (error) {
    res.status(400).json(error.message);
  }
});
export default router;
