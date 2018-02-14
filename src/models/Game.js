import mongoose from "mongoose";

const schema = new mongoose.Schema({
  gamename: { type: String, required: true },
  topRow: { type: Array, required: true },
  middleRow: { type: Array, required: true },
  bottomRow: { type: Array, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true }
});

export default mongoose.model("Game", schema);
