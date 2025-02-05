import Product, { IProduct } from "../models/product.model";

export const getAllProducts = async (filters = {}) => {
  return await Product.find(filters).populate("category");
};

export const getProductById = async (id) => {
  return await Product.findById(id).populate("category");
};

export const createProduct = async (data) => {
  return await Product.create(data);
};

export const updateProduct = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, { new: true });
};

export const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};
