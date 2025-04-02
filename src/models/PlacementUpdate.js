import mongoose from "mongoose";

const placementUpdateSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PlacementUpdate =
  mongoose.models.PlacementUpdate ||
  mongoose.model("PlacementUpdate", placementUpdateSchema);

export default PlacementUpdate;
