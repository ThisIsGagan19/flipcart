import express from "express";
const router = express.Router();
import { userSignup, userLogin } from "../controllers/user.controllers.js";
import { getProducts, getProductById } from "../controllers/product.controllers.js";
import { addPaymentGateway, paytmResponse } from "../controllers/payment.controllers.js";

router.post("/signup", userSignup);
router.post("/login", userLogin);

router.get("/products", getProducts);
router.get("/product/:id", getProductById);

router.post("/payment", addPaymentGateway)
router.post("/callback", paytmResponse)

export default router;
