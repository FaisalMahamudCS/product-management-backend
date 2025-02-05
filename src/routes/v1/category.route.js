const express = require("express");
const Category = require("../models/Category");
const { protect, isAdmin } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

router.post("/", protect, isAdmin, async (req, res) => {
  const category = await Category.create(req.body);
  res.status(201).json(category);
});

module.exports = router;
