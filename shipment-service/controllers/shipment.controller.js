import { db } from "../config.js";
import axios from 'axios'; // For making API requests to the inventory-service
import { getCustomerStatus, getSupplierStatus} from "../models/shipment.model.js";
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


// export const createOrder = async (req, res) => {
//   try {
//     const { user_id, product_id, quantity } = req.body;

//     // Validate input
//     if (!user_id || !product_id || !quantity) {
//       return res.status(400).json({ message: 'All fields are required' });
//     }

//     // Step 1: Check inventory availability by sending a request to inventory-service
//     const inventoryServiceURL = `http://localhost:4002/inventory/checkStock/${product_id}`;
//     const response = await axios.get(inventoryServiceURL);

//     if (response.data.quantity < quantity) {
//       return res.status(400).json({ message: 'Insufficient stock in inventory' });
//     }

//     // Step 2: Proceed with order creation
//     const result = await insertOrder(user_id, product_id, quantity);

//     // Step 3: Update the inventory to deduct the ordered quantity
//     await axios.post(`http://localhost:4002/inventory/updateStock`, {
//       product_id,
//       quantity: -quantity // Deduct the quantity
//     });

//     return res.status(201).json({ message: 'Order created successfully', orderId: result.orderId });

//   } catch (error) {
//     console.error('Error in createOrder:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };


