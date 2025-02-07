// import mongoose, { Schema, Document } from "mongoose";
const mongoose = require("mongoose");

// export interface ICategory extends Document {
//   name: string;
// }

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true }
});
const Category = mongoose.model("Category", CategorySchema);
module.exports = Category;

// export default mongoose.model<ICategory>("Category", CategorySchema);
