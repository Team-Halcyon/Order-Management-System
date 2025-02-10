const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const axios = require("axios");

const app = express();
const db = new sqlite3.Database("payments.db");

app.use(express.json());

// Create Payment Table
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS payments (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        orderId INTEGER, 
        status TEXT
    )`);
});

// Process Payment
app.post("/process-payment", (req, res) => {
    const { orderId } = req.body;

    const paymentSuccess = Math.random() > 0.5; // Simulate a 50% success rate

    if (!paymentSuccess) {
        axios.post("http://localhost:5000/order-failed", { orderId }) // Mark order as failed
            .then(() => res.status(400).json({ error: "Payment failed, order canceled" }))
            .catch(() => res.status(400).json({ error: "Payment failed, rollback error" }));
        return;
    }

    db.run("INSERT INTO payments (orderId, status) VALUES (?, 'success')", [orderId], (err) => {
        if (err) return res.status(500).json({ error: "Payment processing error" });

        // Proceed to Shipment
        axios.post("http://localhost:5003/initiate-shipment", { orderId })
            .then(() => res.json({ success: true }))
            .catch(() => res.status(400).json({ error: "Shipment initiation failed" }));
    });
});

app.listen(5002, () => console.log("Payment Service running on port 5002"));
