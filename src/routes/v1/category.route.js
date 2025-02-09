const express = require("express");
const Category = require("../../models/category.model");
const { authenticate, authorizeAdmin } = require("../../middlewares/middleware");

const router = express.Router();

// Get all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Create a new category
router.post("/", authenticate, authorizeAdmin, async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Update a category
router.put("/:id", authenticate, authorizeAdmin, async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Delete a category
router.delete("/:id", authenticate, authorizeAdmin, async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
