import express from "express";
import {  checkCustomerStatus, checkSupplierStatus, changeStatus,createCustomerShipment, createSupplierShipment} from "../controllers/shipment.controller.js";
//addOrder,


const router = express.Router();

router.get("/checkCustomerStatus", checkCustomerStatus);
router.get("/checkSupplierStatus", checkSupplierStatus);
router.post("/addCustomerShipment", createCustomerShipment);
router.post("/addSupplierShipment", createSupplierShipment);
router.post("/updateStatus", changeStatus);

export default router;