import { Router } from "express";
import { Tale } from "../models/tale.js";
const router = Router();
router.post("/tale", async (req, res) => {
  try {
    const { body } = req;
    const newCreatedTale = await Tale.create(body);
    res.status(201).json(newCreatedTale);
  } catch (error) {
    res.status(400).json(error.message);
  }
});
router.get("/tales/:title", async (req, res) => {
  try {
    const { title } = req.params;
    const tale = await Tale.findOne({ title });
    if (!tale) {
      throw new Error(`Tale  ${title} does not exist!`);
    }
    res.status(200).json(tale);
  } catch (error) {
    res.status(404).json(error.message);
  }
});
export default router;
