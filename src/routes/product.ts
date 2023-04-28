import express from "express";
import {
	createProduct,
	deleteAllProducts,
	getProductById,
	getProducts,
} from "../controllers/product";

const productRoutes = express.Router();

productRoutes.get("/", getProducts);
productRoutes.get("/:id", getProductById);
productRoutes.post("/", createProduct);
productRoutes.delete("/", deleteAllProducts);

export default productRoutes;
