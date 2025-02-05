import Product, { IProduct } from "../models/product.model";

export const getAllProducts = async (filters = {}) => {
  return await Product.find(filters).populate("category");
};

export const getProductById = async (id: string) => {
  return await Product.findById(id).populate("category");
};

export const createProduct = async (data: IProduct) => {
  return await Product.create(data);
};

export const updateProduct = async (id: string, data: Partial<IProduct>) => {
  return await Product.findByIdAndUpdate(id, data, { new: true });
};

export const deleteProduct = async (id: string) => {
  return await Product.findByIdAndDelete(id);
};
