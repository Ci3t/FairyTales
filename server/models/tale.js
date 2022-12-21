import { set, Schema, model } from "mongoose";
set("strictQuery", false);
const taleSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  storyLink: {
    type: String,
    required: true,
  },
  culture: {
    type: String,
    enum: ["arabic", "jewish", "russian"],
    required: true,
  },
  data: { type: String, required: true },
});
export const Tale = model("Tale", taleSchema);
