import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema(
  {
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    category: {
      type: String,
      required: [true, "Category is required."],
    },
    prompt: {
      type: String,
      required: [true, "Prompt is required."],
    },
    tags: {
      type: [String],
      required: [true, "Tag(s) are required."],
    },
  },
  { timestamps: true }
);

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
