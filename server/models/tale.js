import { set, Schema, model } from "mongoose";
set("strictQuery", false);
const taleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  storyLink: {
    type: String,
    required: true,
  },
  culture: {
    type: String,
    enum: ["arabic", "jewish"],
    required: true,
  },
  data: [String],
  default: [],
});
export const Tale = new model("Tale", taleSchema);
