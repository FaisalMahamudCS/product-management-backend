const { Router } = require("express");
const productController = require("../../controllers/product.controller");
const { authenticate, authorizeAdmin } = require("../../middlewares/middleware");

//const router = Router();
const router = Router();

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.post("/", productController.createProduct);
router.put("/:id", authenticate, authorizeAdmin, productController.updateProduct);
router.delete("/:id", authenticate, authorizeAdmin, productController.deleteProduct);

module.exports = router;
