import { Router } from "express";
import { getAllProducts, getProducts,getBook, postBook } from "../controller/productsController.js";

const productsRouter = Router();

productsRouter.get("/", getAllProducts);
productsRouter.get("/:categoria", getProducts);
productsRouter.get("/book/:id", getBook);
productsRouter.post("/", postBook)

export default productsRouter;
