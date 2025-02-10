const express = require('express');
const axios = require('axios')
const db = require('./database');

const app = express();
app.use(express.json());

app.post("/check-stock", (req, res) => {
    const { orderId, itemId, quantity } = req.body;

    db.get("SELECT quantity FROM inventory WHERE itemId = ?", [itemId], (err, row) => {
        if (!row || row.quantity < quantity) {
            return res.status(400).json({ error: "Stock not available" });
        }

        db.run("UPDATE inventory SET quantity = quantity - ? WHERE itemId = ?", [quantity, itemId], (err) => {
            if (err) return res.status(500).json({ error: "Inventory update failed" });

            axios.post("http://localhost:5002/process-payment", { orderId, item, quantity })
                .then(() => res.json({ success: true }))
                .catch(() => {
                    db.run("UPDATE inventory SET quantity = quantity + ? WHERE item = ?", [quantity, item]);
                    res.status(400).json({ error: "Payment failed, rolling back inventory" });
                });
        });
    });
});

app.listen(5001, () => console.log("Inventory Service running on port 5001"));
