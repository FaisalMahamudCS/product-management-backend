const express = require("express");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// ✅ Fetch user's cart
router.get("/", protect, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id }).populate("items.product", "name price");
    res.json(cart || { items: [] });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Add a product to the cart
router.post("/", protect, async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ error: "Product not found" });

    let cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      cart = await Cart.create({ user: req.user.id, items: [{ product: productId, quantity }] });
    } else {
      const itemIndex = cart.items.findIndex((item) => item.product.toString() === productId);
      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ product: productId, quantity });
      }
      await cart.save();
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Remove a product from the cart
router.delete("/:id", protect, async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user.id });
    if (!cart) return res.status(404).json({ error: "Cart not found" });

    cart.items = cart.items.filter((item) => item.product.toString() !== req.params.id);
    await cart.save();

    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
    