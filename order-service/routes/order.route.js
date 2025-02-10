import express from "express";
import {  checkStock , addOrder} from "../controllers/order.controller.js";
//addOrder,


const router = express.Router();

router.get("/checkStock", checkStock);
router.post("/addOrder", addOrder);

export default router;