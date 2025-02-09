import express from "express";
import {  checkCustomerStatus, checkSupplierStatus} from "../controllers/shipment.controller.js";
//addOrder,


const router = express.Router();

router.get("/checkCustomerStatus", checkCustomerStatus);
router.get("/checkSupplierStatus", checkSupplierStatus);
//router.post("/addShipment", addShipment);
//router.post("/changeStatus", changeStatus);

export default router;