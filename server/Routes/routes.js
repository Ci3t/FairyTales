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
router.get("/tales", (_, res) => {
  try {
    const data = Tale.find({}).projection({ _id: 1, title: 1 });
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(error.message);
  }
});
router.get("/tales/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const tale = await Tale.findById(id);
    if (!tale) {
      throw new Error(`Tale with id ${id} does not exist!`);
    }
    res.status(200).json(tale);
  } catch (error) {
    res.status(404).json(error.message);
  }
});
router.patch("/tales/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const tale = await Tale.findByIdAndUpdate(id, req.body);
    if (!tale) {
      throw new Error(`Update failed. Tale with id ${id} does not exist!`);
    }
    res.status(200).json(tale);
  } catch (error) {
    res.status(404).json(error.message);
  }
});
router.delete("/tales/:id", async (req, res) => {
  try {
    const tale = await Tale.findByIdAndDelete(req.params.id);
    if (!tale) {
      throw new Error(`Error. Invalid tale ID to delete.`);
    }
    res
      .status(200)
      .json({ message: `Tale ${tale.title} was deleted successfully` });
  } catch (error) {
    res.status(404).json(error.message);
  }
});
export default router;
