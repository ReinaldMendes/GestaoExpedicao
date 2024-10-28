import { Schema, model } from "mongoose";

const speciesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  discoveryLocation: {
    type: String,
    required: true,
  },
  rarity: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    default: 1,
  },
  documented: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const Species = model("Species", speciesSchema);

export default Species;
