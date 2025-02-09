import { db } from "../config.js";
import axios from 'axios'; // For making API requests to the inventory-service
import { getCustomerStatus, getSupplierStatus, updateStatus, insertCustomerShipment, insertSupplierShipment} from "../models/shipment.model.js";
//, insertProduct 
export const checkCustomerStatus = async (req, res) => {
    try {
        const { shipment_id } = req.body;
        if (!shipment_id) {
            return res.status(400).send("Enter shipment_id");
        };
        const result =  await getCustomerStatus(shipment_id);
        if ( !result) {
            return res.status(404).json(" No such shipment made!");
        };
        return res.status(200).json(result);
    } catch (error) {
        console.error("Some error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const checkSupplierStatus = async (req, res) => {
    try {
        const { shipment_id } = req.body;
        if (!shipment_id) {
            return res.status(400).send("Enter shipment_id");
        };
        const result =  await getSupplierStatus(shipment_id);
        if ( !result) {
            return res.status(404).json(" No such shipment made!");
        };
        return res.status(200).json(result);
    } catch (error) {
        console.error("Some error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


export const changeStatus = async (req, res) => {
    try {
        const { shipment_id, new_status } = req.body;
        if (!shipment_id || !new_status) {
            return res.status(400).send("Enter shipment_id and new status");
        };
        const result =  await updateStatus(shipment_id, new_status);
        if ( !result.success) {
            return res.status(404).json(" No such shipment made!");
        };
        return res.status(200).json(result.message);
    } catch (error) {
        console.error("Some error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const createCustomerShipment = async (req, res) => {
  try {
    const { order_id } = req.body;

    // Validate input
    if (!order_id) {
      return res.status(400).json({ message: 'Enter order id' });
    }

    
    const result = await insertCustomerShipment(order_id);
    if (!result.success) {
      return res.status(400).json({ message: 'Failed to create shipment' });
    }
    return res.status(201).json({ message: 'Shipment created successfully', orderId: result.orderId });

  } catch (error) {
    console.error('Error in createOrder:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const createSupplierShipment = async (req, res) => {
    try {
      const { order_id } = req.body;
  
      // Validate input
      if (!order_id) {
        return res.status(400).json({ message: 'Enter order id' });
      }
  
      
      const result = await insertSupplierShipment(order_id);
      if (!result.success) {
        return res.status(400).json({ message: 'Failed to create shipment' });
      }
      return res.status(201).json({ message: 'Shipment created successfully', orderId: result.orderId });
  
    } catch (error) {
      console.error('Error in createOrder:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };


