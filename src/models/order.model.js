const mongoose = require('mongoose');

// export interface IOrder extends Document {
//   user: mongoose.Types.ObjectId;
//   total_amount: number;
//   status: "pending" | "completed";
// }

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  total_amount: { type: Number, required: true },
  status: { type: String, enum: ["pending", "completed"], default: "pending" }
});
const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;

