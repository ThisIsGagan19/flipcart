import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  url: { type: String, required: true },
  detailUrl: { type: String },
  title: {
    shortTitle: { type: String },
    longTitle: { type: String },
  },
  price: {
    mrp: { type: Number, required: true },
    cost: { type: Number, required: true },
    discount: { type: String },
  },
  quantity: { type: Number, default: 1 },
  description: { type: String },
  discount: { type: String },
  tagline: { type: String },
});

const products = mongoose.model("products", productSchema);

export default products;