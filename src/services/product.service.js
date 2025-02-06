//
const Product= require('../models/product.model');  
// import Product, { IProduct } from "../models/product.model";

 const getAllProducts = async (filters = {}) => {
  return await Product.find().populate("category");
};

 const getProductById = async (id) => {
  return await Product.findById(id).populate("category");
};

 const createProduct = async (data) => {
  return await Product.create(data);
};

 const updateProduct = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, { new: true });
};

 const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
}
