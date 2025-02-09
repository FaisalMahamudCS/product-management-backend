const express = require("express");
const Category = require("../../models/category.model");
const { authenticate, authorizeAdmin } = require("../../middlewares/middleware");

const router = express.Router();

router.get("/", async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

router.post("/" , authenticate, authorizeAdmin,async (req, res) => {
  const category = await Category.create(req.body);
  res.status(201).json(category);
});

module.exports = router;
