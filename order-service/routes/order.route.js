import express from "express";
import {  checkStock , createOrder} from "../controllers/order.controller.js";
//addOrder,


const router = express.Router();

router.get("/checkStock", checkStock);
router.post("/addOrder", createOrder);

export default router;