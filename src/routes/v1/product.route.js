import { Router } from "express";
import * as productController from "../../controllers/product.controller";
import { authenticate, authorizeAdmin } from "../../middlewares/auth";

//const router = Router();
const router = Router();

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.post("/", authenticate, authorizeAdmin, productController.createProduct);
router.put("/:id", authenticate, authorizeAdmin, productController.updateProduct);
router.delete("/:id", authenticate, authorizeAdmin, productController.deleteProduct);

export default router;
