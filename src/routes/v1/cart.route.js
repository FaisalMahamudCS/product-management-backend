const express = require("express");
const Cart = require("../../models/cart.model");
const Product = require("../../models/product.model");
const { authenticate, authorizeAdmin } = require("../../middlewares/middleware");

const router = express.Router();

// ✅ Fetch user's cart
router.get("/", authenticate, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.sub }).populate("items.product", "name price");
    console.log(cart);
    res.json(cart || { items: [] });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Add a product to the cart
router.post("/",authenticate, async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ error: "Product not found" });

    let cart = await Cart.findOne({ user: req.user.sub });
    if (!cart) {
      console.log("Creating new cart",req.user.id,req.user);
      cart = await Cart.create({ user: req.user.sub, items: [{ product: productId, quantity }] });
      console.log(cart);
    } else {
      const itemIndex = cart.items.findIndex((item) => item.product.toString() === productId);
      console.log(itemIndex);
      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ product: productId, quantity });
      }
      await cart.save();
    }

    res.status(200).json(cart);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error:error.message });
  }
});


// ✅ Remove a product from the cart
router.delete("/:id", authenticate, async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user.sub });
    if (!cart) return res.status(404).json({ error: "Cart not found" });

    cart.items = cart.items.filter((item) => item.product.toString() !== req.params.id);
    await cart.save();

    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
    