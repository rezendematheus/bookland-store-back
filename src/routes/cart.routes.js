import { addToCart, getUserCart, deleteItemCart } from "../controller/cartController.js";
import { Router } from "express";
import { userAuth } from "../middlewares/userAuth.middleware";
import { schemaValidation } from "../middlewares/schemaValidation.middleware.js";
import { cartObjectSchema } from "../schema/cartSchema.js";

cartRouter = Router()

cartRouter.post("/into-cart", userAuth, schemaValidation(cartObjectSchema), addToCart);

export default cartRouter