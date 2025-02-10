const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const axios = require("axios");

const app = express();
const db = new sqlite3.Database("orders.db");

app.use(express.json());

// Create Orders Table
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        item TEXT, 
        quantity INTEGER, 
        status TEXT DEFAULT 'pending'
    )`);
});

// Place an Order
app.post("/order", (req, res) => {
    const { item, quantity } = req.body;

    db.run("INSERT INTO orders (item, quantity) VALUES (?, ?)", [item, quantity], function (err) {
        if (err) return res.status(500).json({ error: "Order creation failed" });

        const orderId = this.lastID;

        // Call Inventory Service
        axios.post("http://localhost:5001/check-stock", { orderId, item, quantity })
            .then(() => res.json({ success: true, orderId }))
            .catch(() => {
                db.run("UPDATE orders SET status = 'failed' WHERE id = ?", [orderId]);
                res.status(400).json({ error: "Stock unavailable, order failed" });
            });
    });
});

app.post("/order-failed", (req, res) => {
    const { orderId } = req.body;

    db.run("UPDATE orders SET status = 'failed' WHERE id = ?", [orderId], (err) => {
        if (err) return res.status(500).json({ error: "Order rollback failed" });

        res.json({ success: true, message: "Order marked as failed" });
    });
});

app.post("/order-success", (req, res) => {
    const { orderId } = req.body;

    db.run("UPDATE orders SET status = 'completed' WHERE id = ?", [orderId], (err) => {
        if (err) return res.status(500).json({ error: "Final order update failed" });

        res.json({ success: true, message: "Order completed successfully" });
    });
});

app.listen(5000, () => console.log("Order Service running on port 5000"));
