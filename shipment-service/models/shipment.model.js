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

// export const insertOrder = async (user_id, product_id, quantity) => {
//     const query = "INSERT INTO orders (user_id, product_id, quantity) VALUES (?, ?, ?)";
//     try {
//       const [result] = await db.query(query, [user_id, product_id, quantity]);
      
//       if (result.affectedRows === 1) {
//         return { success:true, orderId: result.insertId };
//       }
//       return { success:false };
//     } catch (err) {
//       console.error("Database error:", err);
//       throw err;
//     }
// };
  