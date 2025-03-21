import mongoose from "mongoose";

const placementSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  compensation: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Placement =
  mongoose.models.Placement || mongoose.model("Placement", placementSchema);

export default Placement;
