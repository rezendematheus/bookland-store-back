import { Router } from "express";
import { getAllProducts, getProducts } from "../controller/productsController.js";

const productsRouter = Router();

productsRouter.get("/", getAllProducts);
productsRouter.get("/:categoria", getProducts);

export default productsRouter;
