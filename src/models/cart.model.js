const mongoose = require("mongoose");
const schema = mongoose.Schema;
//const { Schema, model, Types } = mongoose;

const CartSchema = new schema({
  user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      product: { type: mongoose.Types.ObjectId, ref: "Product", required: true },
      quantity: { type: Number, required: true }
    }
  ]
});

const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;
