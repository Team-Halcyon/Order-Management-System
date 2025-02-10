import { db } from "../config.js";
import axios from 'axios'; // For making API requests to the inventory-service
import { getQuantity, insertOrder} from "../models/order.model.js";
//, insertProduct 
export const checkStock = async (req, res) => {
    try {
        const { product_id } = req.body;
        if (!product_id) {
            return res.status(400).send("Enter product_id");
        };
        const result =  await getQuantity(product_id);
        if ( !result) {
            return res.status(404).json(" No such product in inventory");
        };
        return res.status(200).json(result);
    } catch (error) {
        console.error("Some error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


export const createOrder = async (req, res) => {
  try {
    const { user_id, product_id, quantity } = req.body;

    // Validate input
    if (!user_id || !product_id || !quantity) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Step 1: Check inventory availability by sending a request to inventory-service
    const inventoryServiceURL = `http://localhost:5002/checkStock/${product_id}`;
    const response = await axios.get(inventoryServiceURL);


    if (!response.success) {
      return res.status(400).json({ message: 'Insufficient stock in inventory' });
    };
    
    // Step 2: Proceed with order creation
    const result = await insertOrder(user_id, product_id, quantity);

    return res.status(201).json({ message: 'Order created successfully', orderId: result.orderId });

  } catch (error) {
    console.error('Error in createOrder:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


