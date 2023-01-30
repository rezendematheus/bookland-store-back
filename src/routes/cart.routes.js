import { addToCart, getUserCart, deleteItemCart, deleteManyCart } from "../controller/cartController.js";
import { Router } from "express";
import { userAuth } from "../middlewares/userAuth.middleware.js";
import { schemaValidation } from "../middlewares/schemaValidation.middleware.js";
import  cartObjectSchema  from "../schema/cartSchema.js";

const cartRouter = Router()

cartRouter.post("/into-cart", userAuth, schemaValidation(cartObjectSchema), addToCart);
cartRouter.get("/get-cart", userAuth,  getUserCart);
cartRouter.post("/delete-item-cart", userAuth, schemaValidation(cartObjectSchema), deleteItemCart);
cartRouter.post("/delete-many-cart", userAuth, deleteManyCart);

export default cartRouter