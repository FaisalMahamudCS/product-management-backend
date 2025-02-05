import mongoose, { Schema, Document } from "mongoose";

export interface IOrder extends Document {
  user: mongoose.Types.ObjectId;
  total_amount: number;
  status: "pending" | "completed";
}

const OrderSchema = new Schema<IOrder>({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  total_amount: { type: Number, required: true },
  status: { type: String, enum: ["pending", "completed"], default: "pending" }
});

export default mongoose.model<IOrder>("Order", OrderSchema);
