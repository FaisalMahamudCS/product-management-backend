import mongoose, { Schema, Document } from "mongoose";

export interface ICart extends Document {
  user: mongoose.Types.ObjectId;
  product: mongoose.Types.ObjectId;
  quantity: number;
}

const CartSchema = new Schema<ICart>({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, required: true }
});

export default mongoose.model<ICart>("Cart", CartSchema);
