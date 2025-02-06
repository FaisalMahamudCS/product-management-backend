const mongoose = require('mongoose');

// export interface IProduct extends Document {
//   name: string;
//   description: string;
//   price: number;
//   category: mongoose.Types.ObjectId;
//   image_url: string;
// }

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  image_url: { type: String, required: true }
});

const product = mongoose.model('Product', ProductSchema);
module.exports = product;

// export default mongoose.model<IProduct>("Product", ProductSchema);
