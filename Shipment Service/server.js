const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const db = new sqlite3.Database("shipments.db");

app.use(express.json());

// Create Shipments Table
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS shipments (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        orderId INTEGER, 
        status TEXT
    )`);
});

// Initiate Shipment
app.post("/initiate-shipment", (req, res) => {
    const { orderId } = req.body;

    db.run("INSERT INTO shipments (orderId, status) VALUES (?, 'shipped')", [orderId], (err) => {
        if (err) return res.status(500).json({ error: "Shipment failed" });

        // Mark Order as Completed
        axios.post("http://localhost:5000/order-success", { orderId })
            .then(() => res.json({ success: true, message: "Shipment initiated" }))
            .catch(() => res.status(400).json({ error: "Order finalization failed" }));
    });
});

app.listen(5003, () => console.log("Shipment Service running on port 5003"));
