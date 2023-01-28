import { Router } from "express";
import { singIn, singUp } from "../controller/authController.js";

const authRouter=Router();

authRouter.post('/cadastro', singUp);
authRouter.post('/login', singIn);

export default authRouter;