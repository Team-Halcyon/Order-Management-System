import { db } from "../config.js";

export const getCustomerStatus = async (shipment_id) => {
    const query = "SELECT status FROM customer_shipments WHERE shipment_id = ?";
    try {
        const [rows] = await db.query(query, [shipment_id]);
        if (rows.length === 0) {
            console.log(rows);
            return null;
        }
        return rows[0];
    } catch (err) {
        console.log("Database error:", err);
        throw err;
    }
};

export const getSupplierStatus = async (shipment_id) => {
    const query = "SELECT status FROM supplier_shipments WHERE shipment_id = ?";
    try {
        const [rows] = await db.query(query, [shipment_id]);
        if (rows.length === 0) {
            console.log(rows);
            return null;
        }
        return rows[0];
    } catch (err) {
        console.log("Database error:", err);
        throw err;
    }
};

export const updateStatus = async (shipment_id, newStatus) => {
    const query = "UPDATE customer_shipments SET status = ? WHERE shipment_id = ?";
    try {
        const [result] = await db.query(query, [newStatus, shipment_id]);
        
        if (result.affectedRows === 0) {
            console.log("No shipment found with the given ID.");
            return { success:false, message: "No shipment found with the given ID." };  
        }
        
        console.log(`Status updated successfully for shipment_id: ${shipment_id}`);
        return { success:true, message: "Status updated successfully" };
    } catch (err) {
        console.error("Database error:", err);
        throw err;
    }
};

export const insertCustomerShipment = async (order_id) => {
    const query = "INSERT INTO customer_shipments (order_id,status) VALUES (?,'accepted')";
    try {
      const [result] = await db.query(query, [order_id]);
      
      if (result.affectedRows === 1) {
        return { success:true, orderId: result.insertId };
      }
      return { success:false };
    } catch (err) {
      console.error("Database error:", err);
      throw err;
    }
};


export const insertSupplierShipment = async (order_id) => {
    const query = "INSERT INTO supplier_shipments (order_id,status) VALUES (?,'accepted')";
    try {
      const [result] = await db.query(query, [order_id]);
      
      if (result.affectedRows === 1) {
        return { success:true, orderId: result.insertId };
      }
      return { success:false };
    } catch (err) {
      console.error("Database error:", err);
      throw err;
    }
};
  