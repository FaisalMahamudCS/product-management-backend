const express = require("express");
const Order = require("../models/Order");
const Product = require("../models/Product");
const { protect, isAdmin } = require("../middleware/authMiddleware");

const router = express.Router();

//  Fetch all orders (Admin only)
router.get("/", protect, isAdmin, async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "name email").populate("items.product", "name price");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

//  Place a new order (User only)
router.post("/", protect, async (req, res) => {
  try {
    const { items } = req.body;
    if (!items || items.length === 0) return res.status(400).json({ error: "No items in order" });

    let totalAmount = 0;
    const orderItems = [];

    for (const item of items) {
      const product = await Product.findById(item.product);
      if (!product) return res.status(404).json({ error: "Product not found" });

      totalAmount += product.price * item.quantity;
      orderItems.push({ product: product._id, quantity: item.quantity, price: product.price });
    }

    const order = await Order.create({ user: req.user.id, items: orderItems, totalAmount });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

//  Fetch a single order
router.get("/:id", protect, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate("user", "name email").populate("items.product", "name price");
    if (!order) return res.status(404).json({ error: "Order not found" });

    // Allow only admin or owner to view order
    if (order.user._id.toString() !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({ error: "Unauthorized" });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
